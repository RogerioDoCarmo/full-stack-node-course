import React, {
    Component,
} from 'react';

const MyContext = React.createContext();

class AppProvider extends Component {

    constructor() {

        super();
        this.state = {
            display: false,
            date: new Date(),
        };
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                setDisplay: (display) => {

                    this.setState({ display: display });
                },
                setDate: (date) => {
                    this.setState({ date: date });
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export {
    MyContext,
    AppProvider,
}