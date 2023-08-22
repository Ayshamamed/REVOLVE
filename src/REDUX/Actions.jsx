export const AddBlogFunction=(blog)=>{
    return {
        type:'ADD_BLOG',
        payload:blog
    }
}
export const RemoveBlogFunction=(id)=>{
    return{
        type:'REMOVE_BLOG',
        payload:id
    }
}
export const EditBlogFunction=(editBlogs)=>{
    return{
        type:'EDIT_BLOG',
        payload:editBlogs
    }
}
export const RemoveAllBlogFunction=()=>{
    return{
        type:'CLEAR_ALL_BLOG'
    }
}