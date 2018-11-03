import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import GroupListItem from './GroupListItem';
import ListWrapper from '../common/ListWrapper';

export class GroupList extends React.Component {
    render() {
        return (
            <ListWrapper
                title="Seus grupos"
                createLink="/group/create/"
                createButtonLabel="Criar grupo"
            >
                <List className="list__body">
                    {
                        this.props.groups.length === 0 ? (
                            <Typography variant="subtitle1" align="center" >
                                Sem grupos
                            </Typography>
                        ) : (
                            this.props.groups.map(group => <GroupListItem
                                key={group.id}
                                {...group}
                            />)
                        )
                    }
                </List>
            </ListWrapper >
        );
    }
}

const mapStateToProps = state => ({
    groups: state.groups,
});

export default connect(mapStateToProps)(GroupList);
