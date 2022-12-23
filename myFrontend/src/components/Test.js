const Test = () => {

    const list = {
        "right": {
            "label": "Right",
            "items": ["Jack", "Dough"]
        },
        "wrong": {
            "label": "Wrong",
            "items": ["Rain", "Over"]
        },
        "nope": {
            "label": "Nope",
            "items": ["No", "Way"]
        }
    };
    
    // const downLoadCsv = (list) => {
    //     let csvContent = toCsv(Object.values(list).map(i => i.items.map(j => [j, i.label])).flat());
    
    //     const anchorEle = document.createElement('a');
    //     anchorEle.href = `data:text/csv;charset=utf-8,${encodeURI(csvContent)}`;
    //     anchorEle.target = '_blank';
    //     anchorEle.download = `test.csv`;
    //     anchorEle.click();
    //   };

    const downLoadCsv = (list) => {
        let csvContent = toCsv(Object.values(list)
          .filter(i => Array.isArray(i.items)) // check if items is an array
          .map(i => i.items.map(j => [j, i.label]))
          .flat()); // flatten nested arrays
      
        const anchorEle = document.createElement('a');
        anchorEle.href = `data:text/csv;charset=utf-8,${encodeURI(csvContent)}`;
        anchorEle.target = '_blank';
        anchorEle.download = `test.csv`;
        anchorEle.click();
      };
      
      function toCsv(arr){
        return arr.reduce(function(csvString, row){
            csvString += row.join(',') ;
        csvString += "\r\n";  //";";//"\n";
            return csvString;
        }, '');
    }
    
    downLoadCsv(list)


    return(
     <button onClick={downLoadCsv}>
        downloadCsv
     </button>
    )
}


export default Test