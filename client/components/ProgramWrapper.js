import React, { Component } from 'react'
import { Divider, Button, Icon, Grid, Header, Loader } from 'semantic-ui-react'
import axios from 'axios'

import ProgramHistoryLarge from './ProgramHistoryLarge'
import ProgramLarge from './ProgramLarge'
import ProgramHistorySmall from './ProgramHistorySmall'
import ProgramSmall from './ProgramSmall'
import ProgramSmall2 from './ProgramSmall2'

export default class Result extends Component {

    constructor (props) {
        super(props)

        this.state = {
            historyButton: false,
            history: []
        }

        this.toggleHistory = this.toggleHistory.bind(this)
    }

    toggleHistory () {
        console.log('toggleHistory')
        this.setState({
            historyButton: !this.state.historyButton
        }, () => {
            if (this.state.historyButton) {
                const query = '/api/code/' + this.props.program.code
                console.log(query)
                axios
                    .get(query)
                    .then((res) => {
                        this.setState({
                            history: res.data
                        }, () => {
                            console.log('Got history:')
                            console.log(this.state.history)
                        })
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            }
        })
    }

    render() {
        return (
            <div>
                <Divider />
                <Grid verticalAlign='middle'>
                    <ProgramLarge program={this.props.program} toggleHistory={this.toggleHistory} toggled={this.state.historyButton}/>
                    { this.state.historyButton ?
                        this.state.history.reverse().map((program) => {
                            if (program.year !== this.props.program.year) {
                                return <ProgramHistoryLarge program={program} key={program.code + program.year} toggled={this.state.historyButton}/>
                            }
                        }) : undefined
                    }
                    <ProgramSmall program={this.props.program} toggleHistory={this.toggleHistory} toggled={this.state.historyButton} />
                    <ProgramSmall2 program={this.props.program} toggleHistory={this.toggleHistory} toggled={this.state.historyButton} />
                    { this.state.historyButton ?
                        this.state.history.map((program) => {
                            if (program.year !== this.props.program.year) { 
                                return <ProgramHistorySmall program={program} key={program.code + program.year} />
                            }
                        }) : undefined
                    }
                </Grid>
            </div>
        )
    }
}
