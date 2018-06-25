import React, {Component} from 'react';
import FormField from '../../widgets/formFields/formFields';
import styles from './dashboard.css';
import {firebaseArticles, firebase} from '../../firebase';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertFromRaw, convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

import Uploader from '../../widgets/fileUploader/fileUploader';

class Dashboard extends Component {

    state = {
        editorState: EditorState.createEmpty(),
        postError:'',
        loading:false,
        formdata:{
            author: {
                element: 'input',
                value: '',
                config: {
                    name: 'author_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            title: {
                element: 'input',
                value: '',
                config: {
                    name: 'title_input',
                    type: 'text',
                    placeholder: 'Enter the title'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            body:{
                element:'texteditor',
                value:'',
                valid:true
            },
            image:{
                element:'image',
                value:'',
                valid:true
            }
        }
    }

    updateForm = (element, content='') => {

        const newFormdata = {
            ...this.state.formdata
        }
        const newElement = {
            ...newFormdata[element.id]
        }
        if(content === ''){
            newElement.value = element.event.target.value;

        }else{
            newElement.value=content
        }


        if (element.blur) {
            let validData = this.validate(newElement);
            newElement.valid = validData[0];
            newElement.validationMessage = validData[1];

        }
        newElement.touched = element.blur;
        newFormdata[element.id] = newElement;

        console.log(newFormdata);

        this.setState({
            formdata: newFormdata
        })
    }

    validate = (element) => {
        let error = [true, ''];

        if (element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = `${!valid ? 'This field id required' : ''}`;
            error = !valid ? [valid, message] : error
        }
        return error;
    }

     submitForm=(event)=>{

         event.preventDefault();

         let dataToSubmit = {};
         let formIsValid = true;
         for (let key in this.state.formdata) {
             dataToSubmit[key] = this.state.formdata[key].value;

         }
         for (let key in this.state.formdata) {
             formIsValid = this.state.formdata[key].valid && formIsValid;

         }
         console.log(dataToSubmit)

         if(formIsValid){

             this.setState({
                 loading:true,
                 postError:''
                 
             })

             firebaseArticles.orderByChild('id')
                 .limitToLast(1).once('value')
                 .then(snapshot=>{
                     let articleId=null;
                     snapshot.forEach(childSnapshot=>{
                         articleId=childSnapshot.val().id;
                     });
                     dataToSubmit['date']=firebase.database.ServerValue.TIMESTAMP
                     dataToSubmit['id']=articleId+1;
                     firebaseArticles.push(dataToSubmit)
                         .then(article=>{
                             this.props.history.push(`/articles/${article.key}`)
                         }).catch(e=>{
                             this.setState({
                                 postError: e.message
                             })
                     })
                     console.log(dataToSubmit);
                 })

         }else{
             this.setState({
                 postError:'something went wrong'
             })
         }
     }

    submitButton = () => (
        this.state.loading ?
            'loading...'
            :
            <div>
                <button type='submit'>Add post</button>
            </div>
    )

    showError=()=>(
        this.state.postError !== '' ?
            <div className={styles.error}>{this.state.postError}</div>
            : ''
    )

    onEditorStateChange=(editorState)=>{

        let contentState = editorState.getCurrentContent();
        let rawState = convertToRaw(contentState);

        let html = stateToHTML(contentState);

        this.updateForm({id:'body'},html)

        this.setState({
            editorState
        })
    }

    storeFilename=(filename)=> {
        this.updateForm({id:'image'},filename)
        console.log("props " + this.props.filename)

    }

    render(){
        return(
            <div className={styles.postContainer}>
                <form onSubmit={this.submitForm}>
                    <h2>Add Post</h2>

                    <Uploader

                        filename={(filename)=>this.storeFilename(filename)}
                    />

                    <FormField
                        id={'author'}
                        formdata={this.state.formdata.author}
                        change={(element) => this.updateForm(element)}

                    />
                    <FormField
                        id={'title'}
                        formdata={this.state.formdata.title}
                        change={(element) => this.updateForm(element)}

                    />

                    <Editor

                        editorState={this.state.editorState}
                        wrapperClassName='myEditor-wrapper'
                        editorClassName='myEditor-editor'
                        onEditorStateChange={this.onEditorStateChange}

                        />

                    {this.submitButton() }
                    {this.showError()}
                </form>
            </div>
        )
    }

}

export default Dashboard;