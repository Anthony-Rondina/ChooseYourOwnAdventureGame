import React from "react";

class LikeButton extends React.Component {
    state = {
        likes: 0
    };
    addLike = (props) => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    render() {

        return <button onClick={this.addLike} id={this.props.itemId}>Likes: {this.state.likes} </button>
    }
}

export default LikeButton