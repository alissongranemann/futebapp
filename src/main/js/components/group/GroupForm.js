import React from 'react';

export default class GroupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.group ? props.group.name : '',
      players: [{ name: '' }],
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onAddPlayer = () => {
    this.setState(() => ({ players: this.state.players.concat([{ name: '' }]) }));
  }
  onRemovePlayer = (idx) => () => {
    this.setState(() => ({ players: this.state.players.filter((s, sidx) => idx !== sidx) }));
  }
  onPlayerNameChange = (idx) => (evt) => {
    const players = this.state.players.map((player, sidx) => {
      if (idx !== sidx) return player;
      return { ...player, name: evt.target.value };
    });
    this.setState(() => ({ players }));
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Insira um nome.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        players : this.state.players
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Nome"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <div>
            <h4>Jogadores</h4>      
            {this.state.players.map((player, idx) => (
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  value={player.name}
                  onChange={this.onPlayerNameChange(idx)}
                />
                <button type="button" onClick={this.onRemovePlayer(idx)}>-</button>
              </div>
            ))}
            <button type="button" onClick={this.onAddPlayer}>Add Player</button>
          </div>
          <button>Salvar</button>
        </form>
      </div>
    )
  }
}
