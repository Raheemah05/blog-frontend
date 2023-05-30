import React from 'react'

const Post = () => {
  return (
    <div>

          <div className='post w-50 m-auto'>
            <div>
            <label><textarea id="textarea" placeholder='please write your blog here....' maxlength="50"></textarea></label>
            </div>
         <div className="col-md-6 col-12">
          <label htmlFor="" className="form-label">Image</label>
          <input type="file" name="photo" className="form-control"/>
        </div>
        <button type='submit' className="btn btn-success">Post</button>
        
        </div>
    </div>
  )
}

export default Post