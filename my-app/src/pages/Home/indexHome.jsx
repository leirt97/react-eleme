import React from 'react'
// import {connect} from 'react-redux'
import HomeHead from '../../components/HomeHead/HomeHead.jsx'
import HomeCategory from '../../components/HomeCategory/HomeCategory.jsx'
import HomeList from './subpages/HomeList.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './style.less'

class Home extends React.Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            isShow: 'hide',
            isFixed: ''
        }
    }

    render() {
        return (
            <div className="home">                
                {/* <HomeHead address={this.props.userinfo.address}/> */}
                <HomeHead isFixed={this.state.isFixed}/>
                <HomeCategory />
                <HomeList />
                <div onClick={() => {this.goTop()}} className={`to-top ${this.state.isShow}`}></div>
                <Footer footer="home" />
            </div>
        )
    }

    goTop() {
        let timer
        timer = setInterval(() => {
            let top = document.documentElement.scrollTop || document.body.scrollTop
            let speed = Math.ceil(top / 5)
            document.documentElement.scrollTop = document.body.scrollTop = (top - speed)
            if(0 === top) clearInterval(timer)
        },1)    
    }

    componentDidMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0        
        let timeoutId
        let distance = () => {
            let high = document.documentElement.scrollTop || document.body.scrollTop
            if(high >= 35) {
                this.setState({isFixed: 'isfixed'})
            }   else {
                this.setState({isFixed: ''})
            }
            if(high >= 300) {
                this.setState({isShow: 'show'})
            } else {
                this.setState({isShow: 'hide'})
            }
        }
        distance()
        window.addEventListener('scroll',function() {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(distance, 1)
        },false)
    }
}

export default Home
//------------react-redux华丽的分割线-------------

// function mapStateToProps(state) {
//     return {
//         userinfo: state.userinfo
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {}
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Home)