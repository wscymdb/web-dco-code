import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchBannersAction } from '../store/features/home'
export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchBanner()
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {this.props.banners.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  banners: state.home.banners,
})
const mapDispatchToProps = (dispatch) => ({
  fetchBanner: () => dispatch(fetchBannersAction()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
