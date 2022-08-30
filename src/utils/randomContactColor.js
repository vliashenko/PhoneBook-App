export const randomColor = ( ) => {
    const colors = ["#f0f8ff","#faebd7","#00ffff","#7fffd4","#f0ffff","#f5f5dc","#ffe4c4","#ffebcd","#0000ff","#8a2be2","#a52a2a"];
    let value = Math.floor(Math.random() * colors.length);
    return colors[value];
}