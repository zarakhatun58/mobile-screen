import { IonContent, IonItem, IonPage, IonNote, IonCheckbox,IonBadge,IonList,IonLabel } from '@ionic/react';
import React from 'react';

const NewCom= () => {
    return (
        <div>
            <IonPage>
    
                <IonContent>
                   
                        <IonItem>
                            
                            <IonLabel>
                                <h1>Create Idea</h1>
                                <IonNote>Run Idea by Brandy</IonNote>
                            </IonLabel>
                            <IonBadge color="success" slot="end">
                                5 Days
                            </IonBadge>
                        </IonItem>
                   
                </IonContent>
            </IonPage>
        </div>
    );
};

export default NewCom;