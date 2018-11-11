import React from 'react';
import { connect } from 'react-redux';
import MatchList from 'components/match/MatchList';
import WrapperPlayerList from 'components/player/WrapperPlayerList';
import PageWithHeader from '../common/PageWithHeader';

const ViewGroupPage = props => (
    <div>
        <PageWithHeader
            title={props.group.name}
            onClickHeaderAction={props.history.goBack}
            readOnly
        >
            <MatchList groupId={props.group.id} />
            <WrapperPlayerList groupId={props.group.id} />
        </PageWithHeader>
    </div>
);

const mapStateToProps = (state, props) => ({
    group: state.groups.find(group => group.id === props.match.params.id),
});

export default connect(mapStateToProps)(ViewGroupPage);
