import React from 'react';

export default class GroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.group ? props.group.name : '',
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
            this.setState(() => ({ error: 'Insira um nome.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
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
                </form>
            </div>
        )
    }
}
