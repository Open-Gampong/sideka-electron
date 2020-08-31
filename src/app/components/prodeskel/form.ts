import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Subject } from 'rxjs';
import { validateAllFormFields, serializeFormData } from '../../helpers/form';

@Component({
    selector: 'prodeskel-form',
    templateUrl: '../../templates/prodeskel/form.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProdeskelForm implements OnInit, OnDestroy, OnChanges {
    destroyed$: Subject<void> = new Subject();

    @Input() schemas: { [key:string] : any }[];
    @Input() existingValues: { [key:string]: any };
    @Input() overrideValues: { [key:string]: any };
    @Input() title: string;
    @Input() disableSubmit: boolean = false;

    @Output() submit: EventEmitter<any> = new EventEmitter();

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    get f() { return this.form.controls; }

    createFormGroup(formBuilder: FormBuilder, schemas: { [key:string] : any }[]): FormGroup {
        let form = formBuilder.group({});
        schemas.forEach(schema => {
            let control = new FormControl();
            if (schema.required)
                control.setValidators([Validators.required]);
            form.addControl(schema['field'], control);
        });

        return form;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('schemas') && changes['schemas'].currentValue) {
            this.form = this.createFormGroup(this.formBuilder, changes['schemas'].currentValue);
        }

        if (changes.hasOwnProperty('existingValues') && changes['existingValues'].currentValue) {
            let existingValues = changes['existingValues'].currentValue;
            Object.keys(existingValues).forEach(key => {
                this.form.get(key).patchValue(existingValues[key]);
            });
        }

        if (changes.hasOwnProperty('overrideValues') && changes['overrideValues'].currentValue) {
            let overrideValues = changes['overrideValues'].currentValue;
            Object.keys(overrideValues).forEach(key => {
                this.form.get(key).patchValue(overrideValues[key]);
            });
        }
    }

    onSubmit(): void {
        validateAllFormFields(this.form);
        if (!this.form.valid) { return; }

        this.submit.emit(this.form.value);
    }
}