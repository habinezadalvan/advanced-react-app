import React, {Component} from 'react';
import Header from './Header';
import baseAxios from '../apis/youtube';
import VideosArea from './VideosArea';
import Footer from './Footer';


class App extends Component {

    state = {videos: [], selectedVideo: null};


    componentDidMount() {
        this.onSearchSubmit('bruce melody');
    }

    onSearchSubmit = async (input) => {
       const response = await baseAxios.get('/search', {
            params:{
                q: input,
                key: 'AIzaSyDE7yDP6wTzu2sLlUvul6bQi_58RyzVN8Y',
                part:'snippet',
                maxResults: 20,
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    
    }


    onVideoSelection = (video) =>{
        this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className="container">
                <Header onSearchSubmit={this.onSearchSubmit} />
                <VideosArea videos={this.state.videos} onVideoSelect={this.onVideoSelection} selectedVideo={this.state.selectedVideo}/>
                <Footer>
                    <p>Powered by Habineza Leon Christian</p>
                </Footer>
            </div>
        )

    }
}

export default App;