import React from 'react';
import ListWrapper from '../common/ListWrapper';
import PlayerList from './PlayerList';

const WrapperPlayerList = props => (
    <ListWrapper
        title="Jogadores"
        createLink={`/group/${props.groupId}/player/create/`}
        createButtonLabel="Adicionar jogador"
    >
        <PlayerList {...props} />
    </ListWrapper>
);

export default WrapperPlayerList;
