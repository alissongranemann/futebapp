import React from 'react';
import { connect } from 'react-redux';

const TeamPicker = props => (
    <div className={props.className}>
        {props.name}
    </div>
);

const mapStateToProps = state => ({
    players: state.players, // TODO: filter
});

export default connect(mapStateToProps)(TeamPicker);
