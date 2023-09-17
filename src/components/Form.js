import React from 'react'

const Form = () => {
  return (
    <div class="background">
        <div class="container">
            <div class="screen">
                <div class="screen-body">
                    <div class="screen-body-item left">
                    <div class="app-title">
                        <span>CONTACT</span>
                        <span>US</span>
                    </div>
                    <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                    </div>
                    <div class="screen-body-item">
                    <div class="app-form">
                        <div class="app-form-group">
                        <input class="app-form-control gr-txt" placeholder="NAME" value="Gamescraft Studios" />
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL" />
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="CONTACT NO" />
                        </div>
                        <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE" />
                        </div>
                        <div class="app-form-group buttons">
                        <button class="app-form-button">CANCEL</button>
                        <button class="app-form-button">SEND</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




  );
}

export default Form