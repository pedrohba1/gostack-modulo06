/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';
import {Container, Header, Avatar, Name, Bio} from './styles';

export default class User extends Component {
    static routeParams = ({route}) => ({
        title: route.params.user.name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
        route: PropTypes.shape().isRequired,
    };

    state = {
        stars: [],
    };

    async componentDidMount() {
        const {route} = this.props;
        const {user} = route.params;
        const response = await api.get(`/users/${user.login}/starred`);
        this.setState({stars: response.data});
    }

    render() {
        const {route} = this.props;
        const {user} = route.params;
        const {stars} = this.state;

        return (
            <Container>
                <Header>
                    <Avatar source={{uri: user.avatar}} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>
            </Container>
        );
    }
}
