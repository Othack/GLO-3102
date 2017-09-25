export class Toast{
    constructor(type){
        this.type = type;
        this.innerDiv = document.createElement('div');
        this.innerDiv.className = this.type;
        this.innerDiv.innerHTML = document.getElementById("theMessage").value;
    }

    showToast(){
        const toastArea = document.getElementById("toastArea");
        toastArea.appendChild(this.innerDiv);
        var that = this;
        setTimeout(function(){
            that.innerDiv.remove();
        }, 4000);
    }

}