const postData = async (url, data) => {
    const res = await fetch (url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: data
    });

    return await res.json();
};

const getSourse = async (url) => {
    let res = await fetch (url);
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status ${res.status}`); 
        }

    return await res.json();
};

export {postData};
export {getSourse};