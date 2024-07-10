import { Link } from "react-router-dom";
import SingleSider from "../components/SingleSider";

function Single() {
    return (  
        <>
        <div class="container">
            <div className="mainPost">
                <div className="content">
                    <div className="postimage">
                        <img src="https://images.unsplash.com/photo-1697089335070-a6f5eecbb143?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"/>
                    </div>
                    <div className="options">
                        <div className="prosec">
                        <div className="profile">
                            <img src="https://images.unsplash.com/photo-1720091556238-efdb09a7f4bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                        </div>
                        <div className="info">
                            <div className="author">
                            <span>John</span>
                            </div>
                            <div className="history">
                            <span>Created 2 Days ago</span>
                            </div>
                        </div>
                        </div>
                        <div className="edits">
                        <Link to="/write"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                        </Link>
                        <Link to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                        </Link>
                        </div>
                    </div>
                    <div className="description">
                        <h2>This article is about a community of trees.</h2>
                        <p>
                        The English Wikipedia is the primary[a] English-language edition of Wikipedia, an online encyclopedia. It was created by Jimmy Wales and Larry Sanger on 15 January 2001, as Wikipedia's first edition.

                        <br/>English Wikipedia is hosted alongside other language editions by the Wikimedia Foundation, an American nonprofit organization. Its content is written independently of other editions[1] in various varieties of English, aiming to stay consistent within articles. Its internal newspaper is The Signpost.

                        <br/>English Wikipedia is the most-read version of Wikipedia,[2][3] accounting for 48% of Wikipedia's cumulative traffic, with the remaining percentage split among the other languages.[4] The English Wikipedia has the most articles of any edition, at 6,848,825 as of July 2024.[5] It contains 10.8% of articles in all Wikipedias,[5] although it lacks millions of articles found in other editions.[1] The edition's one-billionth edit was made on 13 January 2021.[6]
                        </p>
                    </div>
                </div>
                <SingleSider/>
            </div>
        </div>
        </>
    );
}

export default Single;