// ** get ls data

const getLsData = ()=>{
    const storedBookmark = JSON.parse(localStorage.getItem('bookmark'));

    let marks = [];

    storedBookmark && (marks = storedBookmark)

    return marks;
};

const setLsData = (info)=>{

    // ** get stored data

    const storedData = getLsData();

    if (storedData.length === 0) {
        const newBookMarks = [
            info,
        ];

        localStorage.setItem('bookmark', JSON.stringify(newBookMarks));
    } else{
        const newBookMarks = [
            ...storedData,
            info
        ];

        localStorage.setItem('bookmark', JSON.stringify(newBookMarks));
    }

}



export { getLsData, setLsData };

