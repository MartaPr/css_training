import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class Header extends Component {

    state = {
        headerShow: false,
        open: false,
        anchorEl: null
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        window.scrollY > 0 ? this.setState({ headerShow: true }) : this.setState({ headerShow: false });
    }

    render() {

        return (
            
            <AppBar
                className="header"
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0'
                }}
            >
                <Toolbar>

                    <div className="header_logo">
                        <div className="header_name font_gloria">Hunters inc.</div>
                    </div>

                </Toolbar>
            </AppBar>
            
        );
    }
}

export default Header;