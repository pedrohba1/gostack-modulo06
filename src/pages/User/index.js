/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import api from '../../services/api';
import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

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
        loading: false,
    };

    async componentDidMount() {
        this.setState({loading: true});
        const {route} = this.props;
        const {user} = route.params;
        const response = await api.get(`/users/${user.login}/starred`);
        this.setState({stars: response.data, loading: false});
    }

    render() {
        const {route} = this.props;
        const {user} = route.params;
        const {stars, loading} = this.state;

        return (
            <Container>
                <Header>
                    <Avatar source={{uri: user.avatar}} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                {loading ? (
                    <ActivityIndicator color="#fff" size={100} />
                ) : (
                    <Stars
                        data={stars}
                        keyExtractor={star => String(star.id)}
                        renderItem={({item}) => (
                            <Starred>
                                <OwnerAvatar
                                    source={{uri: item.owner.avatar_url}}
                                />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Author>{item.owner.login}</Author>
                                </Info>
                            </Starred>
                        )}
                    />
                )}
            </Container>
        );
    }
}
