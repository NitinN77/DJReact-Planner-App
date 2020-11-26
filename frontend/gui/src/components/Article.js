import React, { Component } from "react";

import { List } from "antd";
import './Article.css';

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
      <div>
        <List style={{backgroundColor: '#fff', padding: '30px'}}
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
              <div style={{display: 'inline-flex'}}>
                { this.state.completed[item.id] ? <a href={`article/${item.id}/`}><h2 className="done">{item.title}</h2></a> : <a href={`article/${item.id}/`}><h2>{item.title}</h2></a> }
                <IconButton onClick={() => this.handleTick(item.id)} style={{position:'absolute', right:0}}> 
                  { this.state.completed[item.id] ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                </IconButton>
              </div>
              }
            />
            { this.state.completed[item.id] ? <p className="done">{item.content}</p> : <p>{item.content}</p> }
          </List.Item>
        )}
      />
      </div>
    );
  }
  
};

export default Articles;
