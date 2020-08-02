import React, { Component } from "react";
import { connect } from "react-redux";
import { searchData } from "../../actions/SearchAction";
import JumbotronIcon from "../../assests/images/jumbotron-1.png";
import loadingGif from "../../assests/images/loading.gif";

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "player",
      tag: ""
    };
  }

  handleSubmit = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  dispatchSubmit = event => {
    event.preventDefault();
    const { option, tag } = this.state;
    this.props.searchData(tag, option);
  };

  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={JumbotronIcon}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Track the player
              <br className="hidden lg:inline-block" />
              Game Data
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
            </p>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="input-tag"
                  >
                    Game Tag
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="input-tag"
                    type="text"
                    placeholder="$6858f6"
                    name="tag"
                    onChange={this.handleSubmit}
                  />
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    Option
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={this.handleSubmit}
                      name="option"
                    >
                      <option value="player">Player</option>
                      <option value="clan">Clan</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  class="flex mx-10 justify-center item-center text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-2/3 text-center"
                  onClick={this.dispatchSubmit}
                >
                  Search
                </button>
              </div>
            </form>
            <div className="p-4 md:w-full">
              {this.props.search && this.props.search.player && (
                <div className="flex rounded-lg h-full bg-gray-100 p-3 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <img src={JumbotronIcon} alt="player_icon" />
                    </div>
                    <div className="flex-row mt-4">
                      <h2 className="text-gray-900 text-lg title-font font-medium uppercase">
                        {this.props.search.player.name}
                      </h2>
                      <span className="text-sm text-gray-600">
                        {" "}
                        {this.props.search.player.tag}
                      </span>
                    </div>
                    <a className="text-indigo-500 inline-flex justify-end flex-grow  cursor-pointer">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2 mt-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
              {this.props.search.loading &&
                this.props.search.loading === true && (
                  <img src={loadingGif} className="mx-16" alt="loading_gif" />
                )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchData }
)(Jumbotron);
