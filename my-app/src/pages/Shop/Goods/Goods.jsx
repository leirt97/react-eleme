import React from 'react'
import './style.less'
import LookSort from '../../../components/LookSort/LookSort.jsx'

class Goods extends React.Component {
    constructor(props,context) {
        super(props,context) 
        this.state = {
            data: {},
            index: 0,
            itemHigh: []
        }
    }

    render() {
        const {data} = this.state
        return (
            <div className="goods">
                <div className="goods-sort">
                    <ul className={this.props.isFixed} id="goods-ul">
                    {data.commodity.map((v,i) => {
                        return (
                        <li key={i} className={this.state.index === i ? 'selected' : ''} onClick={(e) => {this.changeSort(e)}} value={i}>
                            {v.name}
                        </li>
                        )
                    })}
                    </ul>
                </div>
                <div className="goods-look">
                    <LookSort data={ this.props.data[0] } goods={ this.state.goodsItems } add={ this.props.add } minus={ this.props.minus }/>
                </div>
            </div>
        )
    }

    componentWillMount() {
        const data = this.props.data[0]
        this.setState({data: data})
    }

    componentDidMount() {  
        let itemHigh = []
        let Odiv = document.getElementById('look-scroll')
        let Adivs = Odiv.querySelectorAll('.look-items')
        for(let i = 0; i < Adivs.length; i++) {
            itemHigh[i] = Adivs[i].offsetTop + 112
        }
        this.setState({itemHigh: itemHigh})
        let timer 
        let distance = () => {
            let high = document.documentElement.scrollTop || document.body.scrollTop
            itemHigh.forEach((v,i,arr) => {
                if(high >= arr[i] && high <= arr[i+1]) {
                    this.setState({index: i})
                }
            })
        }
        window.addEventListener('scroll',() => {
            if(timer) clearTimeout(timer)
            timer = setTimeout(distance,1)
        })
    }
    //点击左侧类别改变右侧商品
    changeSort(e) {
        let i = e.target.value
        this.setState({index: i})        
        document.documentElement.scrollTop = document.body.scrollTop = this.state.itemHigh[i]
    }
    
}

export default Goods