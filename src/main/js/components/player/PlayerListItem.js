import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemovePlayer } from 'actions/players';

export class PlayerListItem extends React.Component {

    render() {
        return (
            <Link className="list-item" to={`/player/edit/${this.props.id}`}>
                <div>
                    <h3 className="list-item__title">{this.props.name}</h3>
                </div>
                {/* <button type="button" onClick={props.startRemoveGame(props.id)}>-</button> */}
            </Link>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startRemovePlayer: (id) => () => dispatch(startRemovePlayer({ id }))
});

export default connect(undefined, mapDispatchToProps)(PlayerListItem);
