import React, { Component } from "react";

import { List } from "antd";

import { IconButton } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

class Articles extends Component {

  state = {
    completed: Array(this.props.data.length).fill(false),
  }

  handleTick = (id) => {
    if (id) {
      let a = this.state.completed.slice();
      a[id] = !a[id];
      this.setState({ completed: a});
    }
  }

  render(){
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={this.props.data}
        renderItem={(item) => (
          <List.Item
            key={item.id}
          >
            <List.Item.Meta
              title={
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flex: 'wrap'}}>
                { this.state.completed[item.id] ? <a href={`article/${item.id}/`}><del>{item.title}</del></a> : <a href={`article/${item.id}/`}>{item.title}</a> }
                {" "}{" "}
                <IconButton onClick={() => this.handleTick(item.id)}> 
                  { this.state.completed[item.id] ? <CheckBoxIcon  style={{float: 'right'}}/> : <CheckBoxOutlineBlankIcon  style={{float: 'right'}}/>}
                </IconButton>
              </div>
              }
            />
            { this.state.completed[item.id] ? <div><del>{item.content}</del></div> : <div>{item.content}</div> }
          </List.Item>
        )}
      />
    );
  }
  
};

export default Articles;
