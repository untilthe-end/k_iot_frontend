import React from "react";

// https://cdn.pixabay.com/photo/2018/01/03/19/17/cat-3059075_1280.jpg

const cat = {
  catUrl: "https://cdn.pixabay.com/photo/",
  description: "2018/01/03/19/17/",
  imageId: "cat-3059075_1280.jpg",
  name: "아기 고양이",
  imageTheme: {
    width: "200px",
    height: "150px",
  },

  theme: {
    backgroundColor: "black",
    color: "white",
  },
};

function E_JSX() {
  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img src={cat.catUrl+cat.description+cat.imageId} alt={cat.name} 
        width={cat.imageTheme.width}
        height={cat.imageTheme.height}
        />
        
      </div>
    </>
  );
}

export default E_JSX;
