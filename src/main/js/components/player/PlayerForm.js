import React from 'react';

export default class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.player ? props.player.name : '',
            error: ''
        };
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name) {
            this.setState(() => ({ error: 'Preencha os campos obrigatórios.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name
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
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <button>Salvar</button>
                </form>
            </div>
        )
    }
}
