const { useCallback } = require("react");

function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: userId,
        name: "Keziah",
        email: "keziahcorpuz04@gmail.com",
        username: "keziahcorpuz"
      };
      resolve(user);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
        const posts = [
            { postId: 1, userId: userId, title: 'Post 1', content: 'This is my first post.' },
            { postId: 2, userId: userId, title: 'Post 2', content: 'This is my second post.' },
            { postId: 3, userId: userId, title: 'Post 3', content: 'This is my third post.' }
        ];
        resolve(posts);
        }, 1500);
    });
}

function fetchPostComments(postId) {
        return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (Math.random() < 0.3) {
            reject(new Error('Failed to fetch comments'));
            return;
        }
        const postComments = [
            { postId: 1, commentId: 1, username: 'keziahcorpuz', comment: 'This is my first comment.' },
            { postId: 2, commentId: 2, username: 'keziahcorpuz', comment: 'This is my second comment.' },
            { postId: 3, commentId: 3, username: 'keziahcorpuz', comment: 'This is my third comment.' }
        ];
        resolve(postComments);
        }, 2000);
    });
}

async function fetchDataSequentially(userId) {
  console.log('Starting sequential fetch...');
  const startTime = Date.now();
  
  try {
    // TODO: Step 1 - Await fetchUserProfile
    // Log: "User profile retrieved"
    const userProfile = await fetchUserProfile(userId);
    console.log("User profile retrieved");
    
    // TODO: Step 2 - Await fetchUserPosts
    // Log: "Posts retrieved"
    const posts = await fetchUserPosts(userId);
    console.log("Posts retrieved");
    
    // TODO: Step 3 - Loop through posts and await fetchPostComments for each
    // Log: "Comments retrieved for post X"
    for (let postId = 1; postId <=3; postId++) {
        const postComments = await fetchPostComments(postId);
        console.log("Comments retrieved for post " + postId);
    }
    
    const endTime = Date.now();
    console.log(`Sequential fetch took ${endTime - startTime}ms`);
    
    // TODO: Return all data combined
    return {
        userProfile,
        posts,
        postComments
    };
    
  } catch (error) {
    console.error('Error in sequential fetch:', error.message);
  }
}

async function fetchDataInParallel(userId) {
  console.log('Starting parallel fetch...');
  const startTime = Date.now();
  
  try {
    // TODO: Use Promise.all() to fetch user and posts simultaneously
    // Hint: const [user, posts] = await Promise.all([...]);
    const [user, posts] = await Promise.all([
        fetchUserProfile(),
        fetchUserPosts()
    ]);
    
    console.log('User and posts retrieved simultaneously');
    
    // TODO: Fetch all comments for all posts in parallel
    // Hint: Use posts.map() with fetchPostComments, then Promise.all()
    const comments = posts.map(function(post) {
    return fetchPostComments(post.postId);
    });

    const allComments = await Promise.all(comments);

    const endTime = Date.now();
    console.log(`Parallel fetch took ${endTime - startTime}ms`);
    
    // TODO: Return all data combined
    return {
        allComments
    };
    
  } catch (error) {
    console.error('Error in parallel fetch:', error.message);
  }
}

async function fetchDataWithErrorHandling(userId) {
  try {
    // Your fetching code here
    fetchDataSequentially(userId); {
    console.log('Starting sequential fetch...');
}

  } catch (error) {
    // TODO: Log the error
    // TODO: Return partial data if some fetches succeeded
    // TODO: Display user-friendly error message
    console.log('Error in sequential fetch:', error.message);
  }
}

async function fetchDataWithErrorHandling(userId) {
  try {
    // Your fetching code here
    fetchDataInParallel(userId); {
    console.log('Starting parallel fetch...');
}

  } catch (error) {
    // TODO: Log the error
    // TODO: Return partial data if some fetches succeeded
    // TODO: Display user-friendly error message
    console.log('Error in parallel fetch:', error.message);
  }
}

async function getUserContent(userId) {
  console.log('=== Fetching all user content ===');
  
  try {
    // Step 1: Fetch user profile
    const user = await fetchUserProfile(userId);
    console.log('Step 1: User profile retrieved -', user.name);
    
    // Step 2: Fetch user's posts
    // TODO: Complete this step
    const posts = await fetchUserPosts(userId);
    console.log('Step 2: Posts retrieved -', /* number of posts */);
    
    // Step 3: Fetch comments for all posts
    // TODO: Complete this step
    const postComments = await fetchPostComments(postId);
    console.log('Step 3: Comments retrieved');
    
    // Step 4: Combine all data into one object
    const allContent = {
      // TODO: Structure your complete data
      user: fetchUserProfile,
      posts: fetchUserPosts,
      postComments: fetchPostComments
    };
    
    return allContent;
    
  } catch (error) {
    console.error('Failed to fetch user content:', error.message);
    throw error;
  }
}

document.getElementById('sequentialBtn').addEventListener('click', async () => {
  // TODO: Call fetchDataSequentially
  useCallback(fetchDataSequentially)
  // TODO: Display results in the output div
  console.log(fetchDataSequentially)
});
 
document.getElementById('parallelBtn').addEventListener('click', async () => {
  // TODO: Call fetchDataInParallel
  useCallback(fetchDataInParallel)
  // TODO: Display results in the output div
  console.log(fetchDataInParallel)
});

function displayResults(data, container) {
  // TODO: Clear the container
  // TODO: Create HTML elements to show:
  //   - User information
  //   - Each post with its title
  //   - Comments under each post
  // TODO: Append to container
}