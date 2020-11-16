import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivityRecord } from './entity';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EndemicDataService {
  constructor(private fireStore: AngularFirestore) {}

  getActivityRecords(): Observable<ActivityRecord[]> {
    return this.fireStore
      .collection<any>('activity-record')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
        map((data) => {
          return data.map((record) => {
            return {
              ...record,
              ...{
                startTime: this.convertTimestampFromFsToJs(record.startTime),
                endTime: this.convertTimestampFromFsToJs(record.endTime),
              },
            };
          });
        })
      );
  }

  createActivityRecord(activityRecord: ActivityRecord) {
    if (
      activityRecord.tenantId &&
      activityRecord.startTime &&
      activityRecord.contactPrefer &&
      (activityRecord.email || activityRecord.mobile)
    ) {
      return from(
        this.fireStore.collection('activity-record').add(activityRecord)
      );
    }
  }

  updateActivityRecordEndTime(recordId: string) {
    return this.fireStore
      .collection('activity-record')
      .doc(recordId)
      .update({
        endTime: this.convertTimestampFromJsToFs(new Date()),
      });
  }

  convertTimestampFromFsToJs(timestamp: firebase.default.firestore.Timestamp) {
    return timestamp
      ? new firebase.default.firestore.Timestamp(
          timestamp.seconds,
          timestamp.nanoseconds
        ).toDate()
      : '';
  }

  convertTimestampFromJsToFs(timestamp: any) {
    return firebase.default.firestore.Timestamp.fromDate(timestamp);
  }
}
