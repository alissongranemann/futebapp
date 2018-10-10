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
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Nome"
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                <div className="form-footer">
                    <button className="button">Salvar</button>
                </div>
            </form>
        )
    }
}
