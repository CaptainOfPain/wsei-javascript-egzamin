document.addEventListener('DOMContentLoaded', function() {
    //1
    let sample_classes = document.querySelectorAll('.sample_class');
    let tagNames = getTagsOfElements(sample_classes);
    console.log(tagNames);
    //2
    let sampleIdElement = document.querySelector('#sample_id');
    let classes = getClassesOfElement(sampleIdElement);
    console.log(classes);
    //3
    let liElements = document.querySelectorAll('.sample_class_2 li');
    let innerTexts = getInnerTextsOfElements(liElements);
    console.log(innerTexts);
    //4
    let links = document.querySelectorAll('a[href]');
    let addresses = getAddressesOfElements(links);
    console.log(addresses);
    //5
    let sampleClass3Children = document.querySelector('.sample_class_3').children;
    let childrenTagNames = getTagsOfElements(sampleClass3Children);
    console.log(childrenTagNames);
});
//1
function getTagsOfElements(elements) {
    let tagNames = [];
    for(let element of elements) {
        tagNames.push(element.tagName);
    }
    return tagNames;
}
//2
function getClassesOfElement(element) {
    let elementClasses = element.classList;
    return elementClasses;
}
//3
function getInnerTextsOfElements(elements) {
    let innerTexts = [];
    for(let element of elements) {
        innerTexts.push(element.innerText);
    }
    return innerTexts;
}
//4
function getAddressesOfElements(elements) {
    let addreses = [];
    for(let element of elements) {
        addreses.push(element.href);
    }
    return addreses;
}