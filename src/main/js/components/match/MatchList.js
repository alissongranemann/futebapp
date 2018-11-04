import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { Paper } from '@material-ui/core';
import ListWrapper from '../common/ListWrapper';
import MatchListItem from './MatchListItem';

const MatchList = props => (
    <ListWrapper
        title="Peladas"
        createLink={`/group/${props.groupId}/match/create/`}
        createButtonLabel="Criar pelada"
    >
        <Paper>
            <List className="list__body">
                {
                    props.matches.length === 0 ? (
                        <Typography variant="subtitle1" align="center" >
                            Sem peladas
                        </Typography>
                    ) : (
                        props.matches.map((match, index, arr) => <MatchListItem
                            key={match.id}
                            groupId={props.groupId}
                            {...match}
                            divider={index !== arr.length - 1}
                        />)
                    )
                }
            </List>
        </Paper>
    </ListWrapper>
);

const mapStateToProps = (state, props) => ({
    matches: state.matches.filter(match => match.group === props.groupId),
});

export default connect(mapStateToProps)(MatchList);
