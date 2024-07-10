import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
    
  const [value, setValue] = useState('');

    return (  
        <>
        <div class="container">
        <div className="editor">
            <div className="texter">
            <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Provide Title Here"/>
            </div>
            <div className="quillE">
            <ReactQuill theme="snow" value={value} onChange={setValue} className='editquill'/>
            </div>
            </div>
            <div className="uploader">
                <div className="postAsset">
                <h4>Publish</h4>
                <input type='file' id='file' style={{display:"none"}}></input>
                <label htmlFor='file' className='file'>Upload Image</label>
                <div className="button">
                <button type="button" class="btn btn-outline-dark">Save as a draft</button>
                <button type="button" class="btn btn-outline-dark">Update</button>
                </div>
                </div>
                <div className="category">
                <h4>
                    Category
                </h4>
                <div>
                <input type="radio" id='art' name='art' value="art"/>
                <label htmlFor="art">Arts</label>
                </div>
                <div>
                <input type="radio" id='science' name='science' value="science"/>
                <label htmlFor="science">Science</label>
                </div>
                <div>
                <input type="radio" id='technology' name='technology' value="technology"/>
                <label htmlFor="technology">Technology</label>
                </div>
                <div>
                <input type="radio" id='cinema' name='cinema' value="cinema"/>
                <label htmlFor="cinema">Cinema</label>
                </div>
                <div>
                <input type="radio" id='design' name='design' value="design"/>
                <label htmlFor="design">Design</label>
                </div>
                <div>
                <input type="radio" id='food' name='food' value="food"/>
                <label htmlFor="food">Food</label>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Write;