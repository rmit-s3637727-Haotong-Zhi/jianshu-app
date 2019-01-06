import React, { PureComponent, Fragment } from 'react';
import { ListItem,ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class List extends PureComponent{
  render(){
    const{ list, getMoreList ,page } = this.props;
    return (
      <Fragment>
        {
          list.map((item,index)=>(
            <ListItem key={index}>
              <img className='pic' src={item.get('imgUrl')} alt='img' />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
            )
          )
        }
        <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
  }
);

const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.addMoreList(page))
  }
});

export default connect(mapState,mapDispatch)(List);