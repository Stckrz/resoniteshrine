const apiUrl = 'http://localhost:8000';
export async function getArticles(page, articleType) {
    try {
        const result = await fetch(`${apiUrl}/api/articles/?page=${page}&articleType=${articleType}`);
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log("an error occurred", error);
    }
}
export async function getArticleById(id) {
    try {
        const result = await fetch(`${apiUrl}/api/articles/${id}`);
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log("an error occurred", error);
    }
}
export async function postArticle(token, articleObject) {
    const articlePostObject = {
        title: articleObject.title,
        articleType: articleObject.articleType,
        summary: articleObject.summary,
        mainImage: articleObject.mainImage
    };
    try {
        const result = await fetch(`${apiUrl}/api/articles/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            },
            body: JSON.stringify(articlePostObject)
        });
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log("an error occurred", error);
    }
}
export async function postArticleSection(token, sectionObject, articleId) {
    const sectionPostObject = {
        article: articleId,
        section_title: sectionObject.section_title,
        section_content: sectionObject.section_content,
        order: sectionObject.order
    };
    try {
        const result = await fetch(`${apiUrl}/api/sections/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            },
            body: JSON.stringify(sectionPostObject)
        });
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log("an error occurred", error);
    }
}
export async function postSectionImage(token, imageObject) {
    try {
        const result = await fetch(`${apiUrl}/api/images/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            },
            body: JSON.stringify(imageObject)
        });
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log("an error occurred", error);
    }
}
export async function getGalleryImages(page) {
    try {
        const result = await fetch(`${apiUrl}/api/galleryimages/?page=${page}`);
        const data = await result.json();
        if (data.results) {
            return data;
        }
    }
    catch (error) {
        console.log("an error occurred", error);
    }
}
export async function postGalleryImage(token, url) {
    const galleryImageObject = {
        image_url: url
    };
    try {
        const result = await fetch(`${apiUrl}/api/galleryimages/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`
            },
            body: JSON.stringify(galleryImageObject)
        });
        const data = await result.json();
        return data;
    }
    catch (error) {
        console.log("an error occurred", error);
    }
}
