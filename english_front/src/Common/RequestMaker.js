function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const postReq = (reqProps) => {
    let url = reqProps.url; 
    let data = reqProps.data;  
    let successFunc = reqProps.successFunc;
    let csrftoken = getCookie('csrftoken');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRFToken': csrftoken },
        body: JSON.stringify(data)
    };
    fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
              successFunc(data)
            });
}

