import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchBannerListAction } from '../store/home'

export class Profile extends PureComponent {
  handleClick() {
    this.props.fetchBanners()
  }
  componentDidMount() {
    this.handleClick()
  }
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={(e) => this.handleClick(e)}>请求banners的数据</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBanners: () => dispatch(fetchBannerListAction()),
})
export default connect(null, mapDispatchToProps)(Profile)
