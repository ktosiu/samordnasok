
import React, { Component } from 'react'
import { Divider, Button, Icon, Grid, Header, Loader } from 'semantic-ui-react'

export default class ProgramLarge extends Component {

    constructor (props) {
        super(props)

        this.state = {
            thing: undefined
        }
    }

    render() {
        return (
            <Grid.Row verticalAlign='middle' only='computer'>
                <Grid.Column width={2}>
                    <Header as='h4'>
                        { this.props.program.institution }
                    </Header>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Header as='h4'>
                        { this.props.program.code }
                    </Header>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header as='h4'>
                        { this.props.program.name }
                    </Header>
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={1}>
                    <Button floated='right' circular size='large' color='green'>{ this.props.program.ordinary }</Button>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button floated='left' disabled circular size='large'> { this.props.program.ordinary_wait } </Button>
                </Grid.Column>
                <Grid.Column width={1}>
                    <Button floated='right' circular size='large' color='green'>{ this.props.program.first_time }</Button>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button floated='left' disabled circular size='large'> { this.props.program.first_time_wait } </Button>
                </Grid.Column>
                { this.props.toggled ?
                    <Grid.Column width={1}>
                        <Icon name='expand' color='green' fitted circular size='large' onClick={ this.props.toggleHistory }/>
                    </Grid.Column> :
                    <Grid.Column width={1}>
                        <Icon name='expand' fitted circular size='large' onClick={ this.props.toggleHistory }/>
                    </Grid.Column>
                }
            </Grid.Row>
        )
    }
}