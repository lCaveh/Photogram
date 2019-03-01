export function addPost(userId, userDisplayName, userImage, imageUrl, content) {
    return {
      type: 'ADD_POST',
      userId,
      userDisplayName,
      userImage,
      imageUrl,
      content
    }
  }
  
  export function addComment(userId, userDisplayName, userImage, content) {
    return {
      type: 'ADD_COMMENT',
      userId,
      userDisplayName,
      userImage,
      content
    }
  }
  
