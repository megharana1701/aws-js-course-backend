import {
  CartCountControlsComponent,
  CartService,
  MatIcon,
  MatIconModule
} from "./chunk-LNH2WWI7.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatInput,
  MatProgressSpinner,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-YURW6JLZ.js";
import {
  BidiModule,
  CdkPortalOutlet,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  CurrencyPipe,
  DecimalPipe,
  Directionality,
  Directive,
  ENTER,
  ElementRef,
  ErrorStateMatcher,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  MatButton,
  MatCard,
  MatCardContent,
  MatCardTitle,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  NgModule,
  NgTemplateOutlet,
  Optional,
  Output,
  Platform,
  PortalModule,
  ProductsService,
  QueryList,
  SPACE,
  SkipSelf,
  Subject,
  Subscription,
  TemplatePortal,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  _getFocusedElementPierceShadowDom,
  animate,
  animateChild,
  booleanAttribute,
  computed,
  distinctUntilChanged,
  forwardRef,
  group,
  hasModifierKey,
  inject,
  input,
  map,
  numberAttribute,
  of,
  output,
  query,
  setClassMetadata,
  startWith,
  state,
  style,
  switchMap,
  takeUntil,
  toSignal,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-PXTJGHAR.js";

// node_modules/@angular/cdk/fesm2022/stepper.mjs
var _c0 = ["*"];
function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _CdkStepHeader = class _CdkStepHeader {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  /** Focuses the step header. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
};
_CdkStepHeader.\u0275fac = function CdkStepHeader_Factory(t) {
  return new (t || _CdkStepHeader)(\u0275\u0275directiveInject(ElementRef));
};
_CdkStepHeader.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkStepHeader,
  selectors: [["", "cdkStepHeader", ""]],
  hostAttrs: ["role", "tab"],
  standalone: true
});
var CdkStepHeader = _CdkStepHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepHeader, [{
    type: Directive,
    args: [{
      selector: "[cdkStepHeader]",
      host: {
        "role": "tab"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var _CdkStepLabel = class _CdkStepLabel {
  constructor(template) {
    this.template = template;
  }
};
_CdkStepLabel.\u0275fac = function CdkStepLabel_Factory(t) {
  return new (t || _CdkStepLabel)(\u0275\u0275directiveInject(TemplateRef));
};
_CdkStepLabel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkStepLabel,
  selectors: [["", "cdkStepLabel", ""]],
  standalone: true
});
var CdkStepLabel = _CdkStepLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepLabel, [{
    type: Directive,
    args: [{
      selector: "[cdkStepLabel]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var nextId = 0;
var STEP_STATE = {
  NUMBER: "number",
  EDIT: "edit",
  DONE: "done",
  ERROR: "error"
};
var STEPPER_GLOBAL_OPTIONS = new InjectionToken("STEPPER_GLOBAL_OPTIONS");
var _CdkStep = class _CdkStep {
  /** Whether step is marked as completed. */
  get completed() {
    return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
  }
  set completed(value) {
    this._completedOverride = value;
  }
  _getDefaultCompleted() {
    return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
  }
  /** Whether step has an error. */
  get hasError() {
    return this._customError == null ? this._getDefaultError() : this._customError;
  }
  set hasError(value) {
    this._customError = value;
  }
  _getDefaultError() {
    return this.stepControl && this.stepControl.invalid && this.interacted;
  }
  constructor(_stepper, stepperOptions) {
    this._stepper = _stepper;
    this.interacted = false;
    this.interactedStream = new EventEmitter();
    this.editable = true;
    this.optional = false;
    this._completedOverride = null;
    this._customError = null;
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
  }
  /** Selects this step component. */
  select() {
    this._stepper.selected = this;
  }
  /** Resets the step to its initial state. Note that this includes resetting form data. */
  reset() {
    this.interacted = false;
    if (this._completedOverride != null) {
      this._completedOverride = false;
    }
    if (this._customError != null) {
      this._customError = false;
    }
    if (this.stepControl) {
      this.stepControl.reset();
    }
  }
  ngOnChanges() {
    this._stepper._stateChanged();
  }
  _markAsInteracted() {
    if (!this.interacted) {
      this.interacted = true;
      this.interactedStream.emit(this);
    }
  }
  /** Determines whether the error state can be shown. */
  _showError() {
    return this._stepperOptions.showError ?? this._customError != null;
  }
};
_CdkStep.\u0275fac = function CdkStep_Factory(t) {
  return new (t || _CdkStep)(\u0275\u0275directiveInject(forwardRef(() => CdkStepper)), \u0275\u0275directiveInject(STEPPER_GLOBAL_OPTIONS, 8));
};
_CdkStep.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _CdkStep,
  selectors: [["cdk-step"]],
  contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, CdkStepLabel, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
    }
  },
  viewQuery: function CdkStep_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    stepControl: "stepControl",
    label: "label",
    errorMessage: "errorMessage",
    ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
    ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
    state: "state",
    editable: [InputFlags.HasDecoratorInputTransform, "editable", "editable", booleanAttribute],
    optional: [InputFlags.HasDecoratorInputTransform, "optional", "optional", booleanAttribute],
    completed: [InputFlags.HasDecoratorInputTransform, "completed", "completed", booleanAttribute],
    hasError: [InputFlags.HasDecoratorInputTransform, "hasError", "hasError", booleanAttribute]
  },
  outputs: {
    interactedStream: "interacted"
  },
  exportAs: ["cdkStep"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CdkStep_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var CdkStep = _CdkStep;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStep, [{
    type: Component,
    args: [{
      selector: "cdk-step",
      exportAs: "cdkStep",
      template: "<ng-template><ng-content></ng-content></ng-template>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: CdkStepper,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => CdkStepper)]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [STEPPER_GLOBAL_OPTIONS]
    }]
  }], {
    stepLabel: [{
      type: ContentChild,
      args: [CdkStepLabel]
    }],
    content: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    stepControl: [{
      type: Input
    }],
    interactedStream: [{
      type: Output,
      args: ["interacted"]
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    state: [{
      type: Input
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optional: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasError: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _CdkStepper = class _CdkStepper {
  /** The index of the selected step. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    if (this.steps && this._steps) {
      if (!this._isValidIndex(index) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.");
      }
      this.selected?._markAsInteracted();
      if (this._selectedIndex !== index && !this._anyControlsInvalidOrPending(index) && (index >= this._selectedIndex || this.steps.toArray()[index].editable)) {
        this._updateSelectedItemIndex(index);
      }
    } else {
      this._selectedIndex = index;
    }
  }
  /** The step that is selected. */
  get selected() {
    return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
  }
  set selected(step) {
    this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
  }
  /** Orientation of the stepper. */
  get orientation() {
    return this._orientation;
  }
  set orientation(value) {
    this._orientation = value;
    if (this._keyManager) {
      this._keyManager.withVerticalOrientation(value === "vertical");
    }
  }
  constructor(_dir, _changeDetectorRef, _elementRef) {
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._destroyed = new Subject();
    this.steps = new QueryList();
    this._sortedHeaders = new QueryList();
    this.linear = false;
    this._selectedIndex = 0;
    this.selectionChange = new EventEmitter();
    this.selectedIndexChange = new EventEmitter();
    this._orientation = "horizontal";
    this._groupId = nextId++;
  }
  ngAfterContentInit() {
    this._steps.changes.pipe(startWith(this._steps), takeUntil(this._destroyed)).subscribe((steps) => {
      this.steps.reset(steps.filter((step) => step._stepper === this));
      this.steps.notifyOnChanges();
    });
  }
  ngAfterViewInit() {
    this._stepHeader.changes.pipe(startWith(this._stepHeader), takeUntil(this._destroyed)).subscribe((headers) => {
      this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
        const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      }));
      this._sortedHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical");
    (this._dir ? this._dir.change : of()).pipe(startWith(this._layoutDirection()), takeUntil(this._destroyed)).subscribe((direction) => this._keyManager.withHorizontalOrientation(direction));
    this._keyManager.updateActiveItem(this._selectedIndex);
    this.steps.changes.subscribe(() => {
      if (!this.selected) {
        this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
    });
    if (!this._isValidIndex(this._selectedIndex)) {
      this._selectedIndex = 0;
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this.steps.destroy();
    this._sortedHeaders.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Selects and focuses the next step in list. */
  next() {
    this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
  }
  /** Selects and focuses the previous step in list. */
  previous() {
    this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
  }
  /** Resets the stepper to its initial state. Note that this includes clearing form data. */
  reset() {
    this._updateSelectedItemIndex(0);
    this.steps.forEach((step) => step.reset());
    this._stateChanged();
  }
  /** Returns a unique id for each step label element. */
  _getStepLabelId(i) {
    return `cdk-step-label-${this._groupId}-${i}`;
  }
  /** Returns unique id for each step content element. */
  _getStepContentId(i) {
    return `cdk-step-content-${this._groupId}-${i}`;
  }
  /** Marks the component to be change detected. */
  _stateChanged() {
    this._changeDetectorRef.markForCheck();
  }
  /** Returns position state of the step with the given index. */
  _getAnimationDirection(index) {
    const position = index - this._selectedIndex;
    if (position < 0) {
      return this._layoutDirection() === "rtl" ? "next" : "previous";
    } else if (position > 0) {
      return this._layoutDirection() === "rtl" ? "previous" : "next";
    }
    return "current";
  }
  /** Returns the type of icon to be displayed. */
  _getIndicatorType(index, state2 = STEP_STATE.NUMBER) {
    const step = this.steps.toArray()[index];
    const isCurrentStep = this._isCurrentStep(index);
    return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state2);
  }
  _getDefaultIndicatorLogic(step, isCurrentStep) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (!step.completed || isCurrentStep) {
      return STEP_STATE.NUMBER;
    } else {
      return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
    }
  }
  _getGuidelineLogic(step, isCurrentStep, state2 = STEP_STATE.NUMBER) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (step.completed && !isCurrentStep) {
      return STEP_STATE.DONE;
    } else if (step.completed && isCurrentStep) {
      return state2;
    } else if (step.editable && isCurrentStep) {
      return STEP_STATE.EDIT;
    } else {
      return state2;
    }
  }
  _isCurrentStep(index) {
    return this._selectedIndex === index;
  }
  /** Returns the index of the currently-focused step header. */
  _getFocusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
  }
  _updateSelectedItemIndex(newIndex) {
    const stepsArray = this.steps.toArray();
    this.selectionChange.emit({
      selectedIndex: newIndex,
      previouslySelectedIndex: this._selectedIndex,
      selectedStep: stepsArray[newIndex],
      previouslySelectedStep: stepsArray[this._selectedIndex]
    });
    this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
    this._selectedIndex = newIndex;
    this.selectedIndexChange.emit(this._selectedIndex);
    this._stateChanged();
  }
  _onKeydown(event) {
    const hasModifier = hasModifierKey(event);
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    if (manager.activeItemIndex != null && !hasModifier && (keyCode === SPACE || keyCode === ENTER)) {
      this.selectedIndex = manager.activeItemIndex;
      event.preventDefault();
    } else {
      manager.setFocusOrigin("keyboard").onKeydown(event);
    }
  }
  _anyControlsInvalidOrPending(index) {
    if (this.linear && index >= 0) {
      return this.steps.toArray().slice(0, index).some((step) => {
        const control = step.stepControl;
        const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
        return isIncomplete && !step.optional && !step._completedOverride;
      });
    }
    return false;
  }
  _layoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Checks whether the stepper contains the focused element. */
  _containsFocus() {
    const stepperElement = this._elementRef.nativeElement;
    const focusedElement = _getFocusedElementPierceShadowDom();
    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
  }
  /** Checks whether the passed-in index is a valid step index. */
  _isValidIndex(index) {
    return index > -1 && (!this.steps || index < this.steps.length);
  }
};
_CdkStepper.\u0275fac = function CdkStepper_Factory(t) {
  return new (t || _CdkStepper)(\u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef));
};
_CdkStepper.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkStepper,
  selectors: [["", "cdkStepper", ""]],
  contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, CdkStep, 5);
      \u0275\u0275contentQuery(dirIndex, CdkStepHeader, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
    }
  },
  inputs: {
    linear: [InputFlags.HasDecoratorInputTransform, "linear", "linear", booleanAttribute],
    selectedIndex: [InputFlags.HasDecoratorInputTransform, "selectedIndex", "selectedIndex", numberAttribute],
    selected: "selected",
    orientation: "orientation"
  },
  outputs: {
    selectionChange: "selectionChange",
    selectedIndexChange: "selectedIndexChange"
  },
  exportAs: ["cdkStepper"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature]
});
var CdkStepper = _CdkStepper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepper, [{
    type: Directive,
    args: [{
      selector: "[cdkStepper]",
      exportAs: "cdkStepper",
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    _steps: [{
      type: ContentChildren,
      args: [CdkStep, {
        descendants: true
      }]
    }],
    _stepHeader: [{
      type: ContentChildren,
      args: [CdkStepHeader, {
        descendants: true
      }]
    }],
    linear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selected: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    selectedIndexChange: [{
      type: Output
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var _CdkStepperNext = class _CdkStepperNext {
  constructor(_stepper) {
    this._stepper = _stepper;
    this.type = "submit";
  }
};
_CdkStepperNext.\u0275fac = function CdkStepperNext_Factory(t) {
  return new (t || _CdkStepperNext)(\u0275\u0275directiveInject(CdkStepper));
};
_CdkStepperNext.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkStepperNext,
  selectors: [["button", "cdkStepperNext", ""]],
  hostVars: 1,
  hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CdkStepperNext_click_HostBindingHandler() {
        return ctx._stepper.next();
      });
    }
    if (rf & 2) {
      \u0275\u0275hostProperty("type", ctx.type);
    }
  },
  inputs: {
    type: "type"
  },
  standalone: true
});
var CdkStepperNext = _CdkStepperNext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperNext]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.next()"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkStepper
  }], {
    type: [{
      type: Input
    }]
  });
})();
var _CdkStepperPrevious = class _CdkStepperPrevious {
  constructor(_stepper) {
    this._stepper = _stepper;
    this.type = "button";
  }
};
_CdkStepperPrevious.\u0275fac = function CdkStepperPrevious_Factory(t) {
  return new (t || _CdkStepperPrevious)(\u0275\u0275directiveInject(CdkStepper));
};
_CdkStepperPrevious.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkStepperPrevious,
  selectors: [["button", "cdkStepperPrevious", ""]],
  hostVars: 1,
  hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CdkStepperPrevious_click_HostBindingHandler() {
        return ctx._stepper.previous();
      });
    }
    if (rf & 2) {
      \u0275\u0275hostProperty("type", ctx.type);
    }
  },
  inputs: {
    type: "type"
  },
  standalone: true
});
var CdkStepperPrevious = _CdkStepperPrevious;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperPrevious]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.previous()"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkStepper
  }], {
    type: [{
      type: Input
    }]
  });
})();
var _CdkStepperModule = class _CdkStepperModule {
};
_CdkStepperModule.\u0275fac = function CdkStepperModule_Factory(t) {
  return new (t || _CdkStepperModule)();
};
_CdkStepperModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _CdkStepperModule
});
_CdkStepperModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [BidiModule]
});
var CdkStepperModule = _CdkStepperModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
      exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
    }]
  }], null, null);
})();

// src/app/cart/checkout.service.ts
var _CheckoutService = class _CheckoutService {
  constructor() {
    this.cartService = inject(CartService);
    this.productsService = inject(ProductsService);
  }
  getProductsForCheckout() {
    const cart = this.cartService.cart();
    return this.productsService.getProductsForCheckout(Object.keys(cart)).pipe(map((products) => products.map((product) => __spreadProps(__spreadValues({}, product), {
      orderedCount: cart[product.id],
      totalPrice: +(cart[product.id] * product.price).toFixed(2)
    }))));
  }
};
_CheckoutService.\u0275fac = function CheckoutService_Factory(t) {
  return new (t || _CheckoutService)();
};
_CheckoutService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckoutService, factory: _CheckoutService.\u0275fac, providedIn: "root" });
var CheckoutService = _CheckoutService;

// src/app/cart/cart-shipping-form/cart-shipping-form.component.ts
function CartShippingFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " First name is required! ");
    \u0275\u0275elementEnd();
  }
}
function CartShippingFormComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Last name is required! ");
    \u0275\u0275elementEnd();
  }
}
function CartShippingFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Shipping address is required! ");
    \u0275\u0275elementEnd();
  }
}
var _CartShippingFormComponent = class _CartShippingFormComponent {
  constructor() {
    this.shippingInfo = input.required();
    this.nextStep = output();
  }
};
_CartShippingFormComponent.\u0275fac = function CartShippingFormComponent_Factory(t) {
  return new (t || _CartShippingFormComponent)();
};
_CartShippingFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartShippingFormComponent, selectors: [["app-cart-shipping-form"]], inputs: { shippingInfo: [InputFlags.SignalBased, "shippingInfo"] }, outputs: { nextStep: "nextStep" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 4, consts: [[3, "ngSubmit", "formGroup"], [1, "row"], [1, "col", "col-md-6"], [1, "w-100"], ["formControlName", "firstName", "name", "firstName", "placeholder", "First name", "type", "text", "matInput", "", "required", ""], ["formControlName", "lastName", "name", "lastName", "placeholder", "Last name", "type", "text", "matInput", "", "required", ""], [1, "col-12"], ["formControlName", "address", "name", "address", "placeholder", "Shipping address", "type", "text", "matInput", "", "required", ""], ["formControlName", "comment", "name", "comment", "placeholder", "Comment", "type", "text", "matInput", ""], [1, "d-none"]], template: function CartShippingFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0);
    \u0275\u0275listener("ngSubmit", function CartShippingFormComponent_Template_form_ngSubmit_0_listener() {
      return ctx.nextStep.emit();
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3);
    \u0275\u0275element(4, "input", 4);
    \u0275\u0275template(5, CartShippingFormComponent_Conditional_5_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "mat-form-field", 3);
    \u0275\u0275element(8, "input", 5);
    \u0275\u0275template(9, CartShippingFormComponent_Conditional_9_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "mat-form-field", 3);
    \u0275\u0275element(12, "input", 7);
    \u0275\u0275template(13, CartShippingFormComponent_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 6)(15, "mat-form-field", 3);
    \u0275\u0275element(16, "input", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("formGroup", ctx.shippingInfo());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(5, ctx.shippingInfo().getError("required", "firstName") ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(9, ctx.shippingInfo().getError("required", "lastName") ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(13, ctx.shippingInfo().getError("required", "address") ? 13 : -1);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, MatFormField, MatInput, MatError], styles: ["\n\n/*# sourceMappingURL=cart-shipping-form.component.css.map */"] });
var CartShippingFormComponent = _CartShippingFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartShippingFormComponent, { className: "CartShippingFormComponent", filePath: "src\\app\\cart\\cart-shipping-form\\cart-shipping-form.component.ts", lineNumber: 14 });
})();

// src/app/cart/product-item-checkout/product-item-checkout.component.ts
function ProductItemCheckoutComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "app-cart-count-controls", 7);
    \u0275\u0275listener("decrement", function ProductItemCheckoutComponent_Conditional_2_Template_app_cart_count_controls_decrement_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove.emit());
    })("increment", function ProductItemCheckoutComponent_Conditional_2_Template_app_cart_count_controls_increment_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add.emit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("productName", ctx_r1.product().title)("count", ctx_r1.product().orderedCount)("available", ctx_r1.product().count);
  }
}
var _ProductItemCheckoutComponent = class _ProductItemCheckoutComponent {
  constructor() {
    this.product = input.required();
    this.hideControls = input(false);
    this.add = output();
    this.remove = output();
  }
};
_ProductItemCheckoutComponent.\u0275fac = function ProductItemCheckoutComponent_Factory(t) {
  return new (t || _ProductItemCheckoutComponent)();
};
_ProductItemCheckoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductItemCheckoutComponent, selectors: [["app-product-item-checkout"]], inputs: { product: [InputFlags.SignalBased, "product"], hideControls: [InputFlags.SignalBased, "hideControls"] }, outputs: { add: "add", remove: "remove" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 20, consts: [[1, "mb-3"], [1, "row", "align-items-center"], [1, "col-12", "col-md-3", "order-3", "order-md-0", "text-center"], [1, "col-12", "col-md-6"], [1, "font-weight-bold", "mb-1"], [1, "text-muted"], [1, "col-12", "col-md-3"], [3, "decrement", "increment", "productName", "count", "available"]], template: function ProductItemCheckoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 0)(1, "div", 1);
    \u0275\u0275template(2, ProductItemCheckoutComponent_Conditional_2_Template, 2, 3, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275pipe(12, "number");
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, !ctx.hideControls() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("col-md-6", !ctx.hideControls())("col-md-9", ctx.hideControls());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.product().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.product().description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(11, 13, \u0275\u0275pipeBind2(10, 10, ctx.product().price, "1.2-2")), " x ", ctx.product().orderedCount, " = ", \u0275\u0275pipeBind1(13, 18, \u0275\u0275pipeBind2(12, 15, ctx.product().totalPrice, "1.2-2")), " ");
  }
}, dependencies: [MatCard, CartCountControlsComponent, DecimalPipe, CurrencyPipe], styles: ["\n\n/*# sourceMappingURL=product-item-checkout.component.css.map */"], changeDetection: 0 });
var ProductItemCheckoutComponent = _ProductItemCheckoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductItemCheckoutComponent, { className: "ProductItemCheckoutComponent", filePath: "src\\app\\cart\\product-item-checkout\\product-item-checkout.component.ts", lineNumber: 20 });
})();

// src/app/cart/order-summary/order-summary.component.ts
function OrderSummaryComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-item-checkout", 4);
    \u0275\u0275listener("add", function OrderSummaryComponent_For_4_Template_app_product_item_checkout_add_0_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.add.emit(product_r2.id));
    })("remove", function OrderSummaryComponent_For_4_Template_app_product_item_checkout_remove_0_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove.emit(product_r2.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("product", product_r2)("hideControls", !ctx_r2.showControls);
  }
}
var _OrderSummaryComponent = class _OrderSummaryComponent {
  constructor() {
    this.products = input.required();
    this.showControls = input.required();
    this.totalPrice = input.required();
    this.add = output();
    this.remove = output();
  }
};
_OrderSummaryComponent.\u0275fac = function OrderSummaryComponent_Factory(t) {
  return new (t || _OrderSummaryComponent)();
};
_OrderSummaryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderSummaryComponent, selectors: [["app-order-summary"]], inputs: { products: [InputFlags.SignalBased, "products"], showControls: [InputFlags.SignalBased, "showControls"], totalPrice: [InputFlags.SignalBased, "totalPrice"] }, outputs: { add: "add", remove: "remove" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 6, consts: [[1, "row"], [1, "col", "flex-grow-1"], [1, "col", "flex-grow-0"], [1, "col", "flex-grow-0", 2, "font-size", "18px"], [3, "add", "remove", "product", "hideControls"]], template: function OrderSummaryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275repeaterCreate(3, OrderSummaryComponent_For_4_Template, 1, 2, "app-product-item-checkout", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(5, "div", 0)(6, "h3", 1);
    \u0275\u0275text(7, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 2);
    \u0275\u0275text(9, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 0)(11, "h3", 1);
    \u0275\u0275text(12, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "b", 3);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.products());
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 4, \u0275\u0275pipeBind2(15, 1, ctx.totalPrice(), "1.2-2")));
  }
}, dependencies: [ProductItemCheckoutComponent, DecimalPipe, CurrencyPipe], styles: ["\n\n/*# sourceMappingURL=order-summary.component.css.map */"], changeDetection: 0 });
var OrderSummaryComponent = _OrderSummaryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderSummaryComponent, { className: "OrderSummaryComponent", filePath: "src\\app\\cart\\order-summary\\order-summary.component.ts", lineNumber: 19 });
})();

// node_modules/@angular/material/fesm2022/stepper.mjs
function MatStepHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
  }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.completedLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.editableLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1);
    \u0275\u0275elementStart(2, "mat-icon", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
  }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx.template);
  }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.optionalLabel);
  }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var _c02 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {
}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cdkPortalOutlet", ctx_r0._portal);
  }
}
var _c1 = (a0, a1) => ({
  step: a0,
  i: a1
});
var _c2 = (a0) => ({
  "animationDuration": a0
});
var _c3 = (a0, a1) => ({
  "value": a0,
  "params": a1
});
function MatStepper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function MatStepper_Case_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 5);
    \u0275\u0275template(1, MatStepper_Case_1_For_3_Conditional_1_Template, 1, 0, "div", 6);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    const \u0275i_8_r3 = ctx.$index;
    const \u0275$count_8_r4 = ctx.$count;
    \u0275\u0275nextContext(2);
    const stepTemplate_r5 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c1, step_r1, i_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, !(\u0275i_8_r3 === \u0275$count_8_r4 - 1) ? 1 : -1);
  }
}
function MatStepper_Case_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("@horizontalStepTransition.done", function MatStepper_Case_1_For_6_Template_div_animation_horizontalStepTransition_done_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6._animationDone.next($event));
    });
    \u0275\u0275elementContainer(1, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    const i_r9 = ctx.$index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mat-horizontal-stepper-content-inactive", ctx_r6.selectedIndex !== i_r9);
    \u0275\u0275property("@horizontalStepTransition", \u0275\u0275pureFunction2(8, _c3, ctx_r6._getAnimationDirection(i_r9), \u0275\u0275pureFunction1(6, _c2, ctx_r6._getAnimationDuration())))("id", ctx_r6._getStepContentId(i_r9));
    \u0275\u0275attribute("aria-labelledby", ctx_r6._getStepLabelId(i_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", step_r8.content);
  }
}
function MatStepper_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275repeaterCreate(2, MatStepper_Case_1_For_3_Template, 2, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275repeaterCreate(5, MatStepper_Case_1_For_6_Template, 2, 11, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r6.steps);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r6.steps);
  }
}
function MatStepper_Case_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275elementContainer(1, 5);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11);
    \u0275\u0275listener("@verticalStepTransition.done", function MatStepper_Case_2_For_1_Template_div_animation_verticalStepTransition_done_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6._animationDone.next($event));
    });
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275elementContainer(5, 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const step_r11 = ctx.$implicit;
    const i_r12 = ctx.$index;
    const \u0275i_22_r13 = ctx.$index;
    const \u0275$count_22_r14 = ctx.$count;
    const ctx_r6 = \u0275\u0275nextContext(2);
    const stepTemplate_r5 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(10, _c1, step_r11, i_r12));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-stepper-vertical-line", !(\u0275i_22_r13 === \u0275$count_22_r14 - 1));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-vertical-stepper-content-inactive", ctx_r6.selectedIndex !== i_r12);
    \u0275\u0275property("@verticalStepTransition", \u0275\u0275pureFunction2(15, _c3, ctx_r6._getAnimationDirection(i_r12), \u0275\u0275pureFunction1(13, _c2, ctx_r6._getAnimationDuration())))("id", ctx_r6._getStepContentId(i_r12));
    \u0275\u0275attribute("aria-labelledby", ctx_r6._getStepLabelId(i_r12));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r11.content);
  }
}
function MatStepper_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatStepper_Case_2_For_1_Template, 6, 18, "div", 9, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r6.steps);
  }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-step-header", 13);
    \u0275\u0275listener("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      const step_r16 = \u0275\u0275restoreView(_r15).step;
      return \u0275\u0275resetView(step_r16.select());
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6._onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r16 = ctx.step;
    const i_r17 = ctx.i;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-horizontal-stepper-header", ctx_r6.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r6.orientation === "vertical");
    \u0275\u0275property("tabIndex", ctx_r6._getFocusIndex() === i_r17 ? 0 : -1)("id", ctx_r6._getStepLabelId(i_r17))("index", i_r17)("state", ctx_r6._getIndicatorType(i_r17, step_r16.state))("label", step_r16.stepLabel || step_r16.label)("selected", ctx_r6.selectedIndex === i_r17)("active", ctx_r6._stepIsNavigable(i_r17, step_r16))("optional", step_r16.optional)("errorMessage", step_r16.errorMessage)("iconOverrides", ctx_r6._iconOverrides)("disableRipple", ctx_r6.disableRipple || !ctx_r6._stepIsNavigable(i_r17, step_r16))("color", step_r16.color || ctx_r6.color);
    \u0275\u0275attribute("aria-posinset", i_r17 + 1)("aria-setsize", ctx_r6.steps.length)("aria-controls", ctx_r6._getStepContentId(i_r17))("aria-selected", ctx_r6.selectedIndex == i_r17)("aria-label", step_r16.ariaLabel || null)("aria-labelledby", !step_r16.ariaLabel && step_r16.ariaLabelledby ? step_r16.ariaLabelledby : null)("aria-disabled", ctx_r6._stepIsNavigable(i_r17, step_r16) ? null : true);
  }
}
var _MatStepLabel = class _MatStepLabel extends CdkStepLabel {
};
_MatStepLabel.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatStepLabel_BaseFactory;
  return function MatStepLabel_Factory(t) {
    return (\u0275MatStepLabel_BaseFactory || (\u0275MatStepLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepLabel)))(t || _MatStepLabel);
  };
})();
_MatStepLabel.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatStepLabel,
  selectors: [["", "matStepLabel", ""]],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatStepLabel = _MatStepLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepLabel, [{
    type: Directive,
    args: [{
      selector: "[matStepLabel]",
      standalone: true
    }]
  }], null, null);
})();
var _MatStepperIntl = class _MatStepperIntl {
  constructor() {
    this.changes = new Subject();
    this.optionalLabel = "Optional";
    this.completedLabel = "Completed";
    this.editableLabel = "Editable";
  }
};
_MatStepperIntl.\u0275fac = function MatStepperIntl_Factory(t) {
  return new (t || _MatStepperIntl)();
};
_MatStepperIntl.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatStepperIntl,
  factory: _MatStepperIntl.\u0275fac,
  providedIn: "root"
});
var MatStepperIntl = _MatStepperIntl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
var MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
var _MatStepHeader = class _MatStepHeader extends CdkStepHeader {
  constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
    super(_elementRef);
    this._intl = _intl;
    this._focusMonitor = _focusMonitor;
    this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the step header. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns string label of given step if it is a text label. */
  _stringLabel() {
    return this.label instanceof MatStepLabel ? null : this.label;
  }
  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel() {
    return this.label instanceof MatStepLabel ? this.label : null;
  }
  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Template context variables that are exposed to the `matStepperIcon` instances. */
  _getIconContext() {
    return {
      index: this.index,
      active: this.active,
      optional: this.optional
    };
  }
  _getDefaultTextForState(state2) {
    if (state2 == "number") {
      return `${this.index + 1}`;
    }
    if (state2 == "edit") {
      return "create";
    }
    if (state2 == "error") {
      return "warning";
    }
    return state2;
  }
};
_MatStepHeader.\u0275fac = function MatStepHeader_Factory(t) {
  return new (t || _MatStepHeader)(\u0275\u0275directiveInject(MatStepperIntl), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_MatStepHeader.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatStepHeader,
  selectors: [["mat-step-header"]],
  hostAttrs: ["role", "tab", 1, "mat-step-header"],
  hostVars: 2,
  hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
    }
  },
  inputs: {
    state: "state",
    label: "label",
    errorMessage: "errorMessage",
    iconOverrides: "iconOverrides",
    index: "index",
    selected: "selected",
    active: "active",
    optional: "optional",
    disableRipple: "disableRipple",
    color: "color"
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 10,
  vars: 17,
  consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
  template: function MatStepHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275elementStart(1, "div")(2, "div", 1);
      \u0275\u0275template(3, MatStepHeader_Conditional_3_Template, 1, 2, "ng-container")(4, MatStepHeader_Conditional_4_Template, 2, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2);
      \u0275\u0275template(6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 3)(7, MatStepHeader_Conditional_7_Template, 2, 1)(8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 4)(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
      \u0275\u0275advance();
      \u0275\u0275classMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
      \u0275\u0275classProp("mat-step-icon-selected", ctx.selected);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(3, ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
      \u0275\u0275advance();
      \u0275\u0275conditional(6, (tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(8, ctx.optional && ctx.state != "error" ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(9, ctx.state === "error" ? 9 : -1);
    }
  },
  dependencies: [MatRipple, NgTemplateOutlet, MatIcon],
  styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatStepHeader = _MatStepHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepHeader, [{
    type: Component,
    args: [{
      selector: "mat-step-header",
      host: {
        "class": "mat-step-header",
        "[class]": '"mat-" + (color || "primary")',
        "role": "tab"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, NgTemplateOutlet, MatIcon],
      template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="_getIconContext()"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (optional && state != 'error') {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (state === 'error') {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`,
      styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color);border-radius:var(--mat-stepper-header-hover-state-layer-shape)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color);border-radius:var(--mat-stepper-header-focus-state-layer-shape)}@media(hover: none){.mat-step-header:hover{background:none}}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.cdk-high-contrast-active .mat-step-header[aria-disabled=true]{outline-color:GrayText}.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-label,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-icon,.cdk-high-contrast-active .mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color)}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color);background-color:var(--mat-stepper-header-icon-background-color)}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color);color:var(--mat-stepper-header-error-state-icon-foreground-color)}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font);font-size:var(--mat-stepper-header-label-text-size);font-weight:var(--mat-stepper-header-label-text-weight);color:var(--mat-stepper-header-label-text-color)}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color)}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color);font-size:var(--mat-stepper-header-error-state-label-text-size)}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size);font-weight:var(--mat-stepper-header-selected-state-label-text-weight)}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color);color:var(--mat-stepper-header-selected-state-icon-foreground-color)}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color);color:var(--mat-stepper-header-edit-state-icon-foreground-color)}']
    }]
  }], () => [{
    type: MatStepperIntl
  }, {
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    state: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    iconOverrides: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    optional: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }]
  });
})();
var DEFAULT_HORIZONTAL_ANIMATION_DURATION = "500ms";
var DEFAULT_VERTICAL_ANIMATION_DURATION = "225ms";
var matStepperAnimations = {
  /** Animation that transitions the step along the X axis in a horizontal stepper. */
  horizontalStepTransition: trigger("horizontalStepTransition", [
    state("previous", style({
      transform: "translate3d(-100%, 0, 0)",
      visibility: "hidden"
    })),
    // Transition to `inherit`, rather than `visible`,
    // because visibility on a child element the one from the parent,
    // making this element focusable inside of a `hidden` element.
    state("current", style({
      transform: "none",
      visibility: "inherit"
    })),
    state("next", style({
      transform: "translate3d(100%, 0, 0)",
      visibility: "hidden"
    })),
    transition("* => *", group([animate("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"), query("@*", animateChild(), {
      optional: true
    })]), {
      params: {
        "animationDuration": DEFAULT_HORIZONTAL_ANIMATION_DURATION
      }
    })
  ]),
  /** Animation that transitions the step along the Y axis in a vertical stepper. */
  verticalStepTransition: trigger("verticalStepTransition", [
    state("previous", style({
      height: "0px",
      visibility: "hidden"
    })),
    state("next", style({
      height: "0px",
      visibility: "hidden"
    })),
    // Transition to `inherit`, rather than `visible`,
    // because visibility on a child element the one from the parent,
    // making this element focusable inside of a `hidden` element.
    state("current", style({
      height: "*",
      visibility: "inherit"
    })),
    transition("* <=> current", group([animate("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"), query("@*", animateChild(), {
      optional: true
    })]), {
      params: {
        "animationDuration": DEFAULT_VERTICAL_ANIMATION_DURATION
      }
    })
  ])
};
var _MatStepperIcon = class _MatStepperIcon {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
_MatStepperIcon.\u0275fac = function MatStepperIcon_Factory(t) {
  return new (t || _MatStepperIcon)(\u0275\u0275directiveInject(TemplateRef));
};
_MatStepperIcon.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatStepperIcon,
  selectors: [["ng-template", "matStepperIcon", ""]],
  inputs: {
    name: [InputFlags.None, "matStepperIcon", "name"]
  },
  standalone: true
});
var MatStepperIcon = _MatStepperIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIcon, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepperIcon]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    name: [{
      type: Input,
      args: ["matStepperIcon"]
    }]
  });
})();
var _MatStepContent = class _MatStepContent {
  constructor(_template) {
    this._template = _template;
  }
};
_MatStepContent.\u0275fac = function MatStepContent_Factory(t) {
  return new (t || _MatStepContent)(\u0275\u0275directiveInject(TemplateRef));
};
_MatStepContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatStepContent,
  selectors: [["ng-template", "matStepContent", ""]],
  standalone: true
});
var MatStepContent = _MatStepContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepContent]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _MatStep = class _MatStep extends CdkStep {
  constructor(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
    super(stepper, stepperOptions);
    this._errorStateMatcher = _errorStateMatcher;
    this._viewContainerRef = _viewContainerRef;
    this._isSelected = Subscription.EMPTY;
    this.stepLabel = void 0;
  }
  ngAfterContentInit() {
    this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
      return this._stepper.selectionChange.pipe(map((event) => event.selectedStep === this), startWith(this._stepper.selected === this));
    })).subscribe((isSelected) => {
      if (isSelected && this._lazyContent && !this._portal) {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      }
    });
  }
  ngOnDestroy() {
    this._isSelected.unsubscribe();
  }
  /** Custom error state matcher that additionally checks for validity of interacted form. */
  isErrorState(control, form) {
    const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
    const customErrorState = !!(control && control.invalid && this.interacted);
    return originalErrorState || customErrorState;
  }
};
_MatStep.\u0275fac = function MatStep_Factory(t) {
  return new (t || _MatStep)(\u0275\u0275directiveInject(forwardRef(() => MatStepper)), \u0275\u0275directiveInject(ErrorStateMatcher, 4), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(STEPPER_GLOBAL_OPTIONS, 8));
};
_MatStep.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatStep,
  selectors: [["mat-step"]],
  contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatStepLabel, 5);
      \u0275\u0275contentQuery(dirIndex, MatStepContent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
    }
  },
  hostAttrs: ["hidden", ""],
  inputs: {
    color: "color"
  },
  exportAs: ["matStep"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: ErrorStateMatcher,
    useExisting: _MatStep
  }, {
    provide: CdkStep,
    useExisting: _MatStep
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  consts: [[3, "cdkPortalOutlet"]],
  template: function MatStep_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
    }
  },
  dependencies: [CdkPortalOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var MatStep = _MatStep;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStep, [{
    type: Component,
    args: [{
      selector: "mat-step",
      providers: [{
        provide: ErrorStateMatcher,
        useExisting: MatStep
      }, {
        provide: CdkStep,
        useExisting: MatStep
      }],
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matStep",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "hidden": ""
        // Hide the steps so they don't affect the layout.
      },
      template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n'
    }]
  }], () => [{
    type: MatStepper,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MatStepper)]
    }]
  }, {
    type: ErrorStateMatcher,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [STEPPER_GLOBAL_OPTIONS]
    }]
  }], {
    stepLabel: [{
      type: ContentChild,
      args: [MatStepLabel]
    }],
    color: [{
      type: Input
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatStepContent, {
        static: false
      }]
    }]
  });
})();
var _MatStepper = class _MatStepper extends CdkStepper {
  /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
  }
  constructor(dir, changeDetectorRef, elementRef) {
    super(dir, changeDetectorRef, elementRef);
    this._stepHeader = void 0;
    this._steps = void 0;
    this.steps = new QueryList();
    this.animationDone = new EventEmitter();
    this.labelPosition = "end";
    this.headerPosition = "top";
    this._iconOverrides = {};
    this._animationDone = new Subject();
    this._animationDuration = "";
    this._isServer = !inject(Platform).isBrowser;
    const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
    this.orientation = nodeName === "mat-vertical-stepper" ? "vertical" : "horizontal";
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._icons.forEach(({
      name,
      templateRef
    }) => this._iconOverrides[name] = templateRef);
    this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._stateChanged();
    });
    this._animationDone.pipe(
      // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
      // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
      // See https://github.com/angular/angular/issues/24084
      distinctUntilChanged((x, y) => x.fromState === y.fromState && x.toState === y.toState),
      takeUntil(this._destroyed)
    ).subscribe((event) => {
      if (event.toState === "current") {
        this.animationDone.emit();
      }
    });
  }
  _stepIsNavigable(index, step) {
    return step.completed || this.selectedIndex === index || !this.linear;
  }
  _getAnimationDuration() {
    if (this.animationDuration) {
      return this.animationDuration;
    }
    return this.orientation === "horizontal" ? DEFAULT_HORIZONTAL_ANIMATION_DURATION : DEFAULT_VERTICAL_ANIMATION_DURATION;
  }
};
_MatStepper.\u0275fac = function MatStepper_Factory(t) {
  return new (t || _MatStepper)(\u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef));
};
_MatStepper.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatStepper,
  selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
  contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, MatStep, 5);
      \u0275\u0275contentQuery(dirIndex, MatStepperIcon, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._icons = _t);
    }
  },
  viewQuery: function MatStepper_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatStepHeader, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
    }
  },
  hostAttrs: ["role", "tablist"],
  hostVars: 11,
  hostBindings: function MatStepper_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("aria-orientation", ctx.orientation);
      \u0275\u0275classProp("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color",
    labelPosition: "labelPosition",
    headerPosition: "headerPosition",
    animationDuration: "animationDuration"
  },
  outputs: {
    animationDone: "animationDone"
  },
  exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: CdkStepper,
    useExisting: _MatStepper
  }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 5,
  vars: 2,
  consts: [["stepTemplate", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
  template: function MatStepper_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, MatStepper_Conditional_0_Template, 1, 0)(1, MatStepper_Case_1_Template, 7, 0)(2, MatStepper_Case_2_Template, 2, 0)(3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275conditional(0, ctx._isServer ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(1, (tmp_2_0 = ctx.orientation) === "horizontal" ? 1 : tmp_2_0 === "vertical" ? 2 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, MatStepHeader],
  styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}'],
  encapsulation: 2,
  data: {
    animation: [matStepperAnimations.horizontalStepTransition, matStepperAnimations.verticalStepTransition]
  },
  changeDetection: 0
});
var MatStepper = _MatStepper;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepper, [{
    type: Component,
    args: [{
      selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]",
      exportAs: "matStepper, matVerticalStepper, matHorizontalStepper",
      host: {
        "[class.mat-stepper-horizontal]": 'orientation === "horizontal"',
        "[class.mat-stepper-vertical]": 'orientation === "vertical"',
        "[class.mat-stepper-label-position-end]": 'orientation === "horizontal" && labelPosition == "end"',
        "[class.mat-stepper-label-position-bottom]": 'orientation === "horizontal" && labelPosition == "bottom"',
        "[class.mat-stepper-header-position-bottom]": 'headerPosition === "bottom"',
        "[attr.aria-orientation]": "orientation",
        "role": "tablist"
      },
      animations: [matStepperAnimations.horizontalStepTransition, matStepperAnimations.verticalStepTransition],
      providers: [{
        provide: CdkStepper,
        useExisting: MatStepper
      }],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgTemplateOutlet, MatStepHeader],
      template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      <div class="mat-horizontal-stepper-header-container">
        @for (step of steps; track step; let i = $index, isLast = $last) {
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step: step, i: i}"></ng-container>
          @if (!isLast) {
            <div class="mat-stepper-horizontal-line"></div>
          }
        }
      </div>

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step; let i = $index) {
          <div class="mat-horizontal-stepper-content" role="tabpanel"
               [@horizontalStepTransition]="{
                  'value': _getAnimationDirection(i),
                  'params': {'animationDuration': _getAnimationDuration()}
                }"
               (@horizontalStepTransition.done)="_animationDone.next($event)"
               [id]="_getStepContentId(i)"
               [attr.aria-labelledby]="_getStepLabelId(i)"
               [class.mat-horizontal-stepper-content-inactive]="selectedIndex !== i">
            <ng-container [ngTemplateOutlet]="step.content"></ng-container>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    @for (step of steps; track step; let i = $index, isLast = $last) {
      <div class="mat-step">
        <ng-container
          [ngTemplateOutlet]="stepTemplate"
          [ngTemplateOutletContext]="{step: step, i: i}"></ng-container>
        <div class="mat-vertical-content-container" [class.mat-stepper-vertical-line]="!isLast">
          <div class="mat-vertical-stepper-content" role="tabpanel"
               [@verticalStepTransition]="{
                  'value': _getAnimationDirection(i),
                  'params': {'animationDuration': _getAnimationDuration()}
                }"
               (@verticalStepTransition.done)="_animationDone.next($event)"
               [id]="_getStepContentId(i)"
               [attr.aria-labelledby]="_getStepLabelId(i)"
               [class.mat-vertical-stepper-content-inactive]="selectedIndex !== i">
            <div class="mat-vertical-content">
              <ng-container [ngTemplateOutlet]="step.content"></ng-container>
            </div>
          </div>
        </div>
      </div>
    }
  }
}

<!-- Common step templating -->
<ng-template let-step="step" let-i="i" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === i ? 0 : -1"
    [id]="_getStepLabelId(i)"
    [attr.aria-posinset]="i + 1"
    [attr.aria-setsize]="steps.length"
    [attr.aria-controls]="_getStepContentId(i)"
    [attr.aria-selected]="selectedIndex == i"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="_stepIsNavigable(i, step) ? null : true"
    [index]="i"
    [state]="_getIndicatorType(i, step.state)"
    [label]="step.stepLabel || step.label"
    [selected]="selectedIndex === i"
    [active]="_stepIsNavigable(i, step)"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !_stepIsNavigable(i, step)"
    [color]="step.color || color"></mat-step-header>
</ng-template>
`,
      styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font);background:var(--mat-stepper-container-color)}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-inactive{height:0;overflow:hidden}.mat-horizontal-stepper-content:not(.mat-horizontal-stepper-content-inactive){visibility:inherit !important}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color);top:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-stepper-content:not(.mat-vertical-stepper-content-inactive){visibility:inherit !important}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}']
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    _stepHeader: [{
      type: ViewChildren,
      args: [MatStepHeader]
    }],
    _steps: [{
      type: ContentChildren,
      args: [MatStep, {
        descendants: true
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatStepperIcon, {
        descendants: true
      }]
    }],
    animationDone: [{
      type: Output
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }]
  });
})();
var _MatStepperNext = class _MatStepperNext extends CdkStepperNext {
};
_MatStepperNext.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatStepperNext_BaseFactory;
  return function MatStepperNext_Factory(t) {
    return (\u0275MatStepperNext_BaseFactory || (\u0275MatStepperNext_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperNext)))(t || _MatStepperNext);
  };
})();
_MatStepperNext.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatStepperNext,
  selectors: [["button", "matStepperNext", ""]],
  hostAttrs: [1, "mat-stepper-next"],
  hostVars: 1,
  hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("type", ctx.type);
    }
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatStepperNext = _MatStepperNext;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[matStepperNext]",
      host: {
        "class": "mat-stepper-next",
        "[type]": "type"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatStepperPrevious = class _MatStepperPrevious extends CdkStepperPrevious {
};
_MatStepperPrevious.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MatStepperPrevious_BaseFactory;
  return function MatStepperPrevious_Factory(t) {
    return (\u0275MatStepperPrevious_BaseFactory || (\u0275MatStepperPrevious_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperPrevious)))(t || _MatStepperPrevious);
  };
})();
_MatStepperPrevious.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatStepperPrevious,
  selectors: [["button", "matStepperPrevious", ""]],
  hostAttrs: [1, "mat-stepper-previous"],
  hostVars: 1,
  hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275hostProperty("type", ctx.type);
    }
  },
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature]
});
var MatStepperPrevious = _MatStepperPrevious;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[matStepperPrevious]",
      host: {
        "class": "mat-stepper-previous",
        "[type]": "type"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatStepperModule = class _MatStepperModule {
};
_MatStepperModule.\u0275fac = function MatStepperModule_Factory(t) {
  return new (t || _MatStepperModule)();
};
_MatStepperModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatStepperModule
});
_MatStepperModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher],
  imports: [MatCommonModule, CommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStepper, MatStepHeader, MatCommonModule]
});
var MatStepperModule = _MatStepperModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      exports: [MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
    }]
  }], null, null);
})();

// src/app/cart/cart.component.ts
function CartComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-order-summary", 14);
    \u0275\u0275listener("add", function CartComponent_Conditional_9_Conditional_0_Template_app_order_summary_add_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.add($event));
    })("remove", function CartComponent_Conditional_9_Conditional_0_Template_app_order_summary_remove_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("products", ctx_r2.products())("totalPrice", ctx_r2.totalPrice())("showControls", true);
  }
}
function CartComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 40);
  }
}
function CartComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartComponent_Conditional_9_Conditional_0_Template, 1, 3, "app-order-summary")(1, CartComponent_Conditional_9_Conditional_1_Template, 2, 1);
    \u0275\u0275elementStart(2, "div", 6)(3, "button", 10);
    \u0275\u0275text(4, " next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r2.products() ? 0 : 1);
  }
}
function CartComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " The cart is empty. Didn't you like anything in our shop? ");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-order-summary", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("products", ctx_r2.products())("totalPrice", ctx_r2.totalPrice())("showControls", false);
  }
}
var _CartComponent = class _CartComponent {
  constructor() {
    this.fb = inject(UntypedFormBuilder);
    this.checkoutService = inject(CheckoutService);
    this.cartService = inject(CartService);
    this.products = toSignal(this.checkoutService.getProductsForCheckout(), {
      initialValue: []
    });
    this.totalPrice = computed(() => {
      const products = this.products();
      const total = products.reduce((acc, val) => acc + val.totalPrice, 0);
      return +total.toFixed(2);
    });
    this.cartNotEmpty = computed(() => {
      return this.cartService.totalInCart() > 0;
    });
    this.shippingInfo = this.fb.group({
      lastName: ["", Validators.required],
      firstName: ["", Validators.required],
      address: ["", Validators.required],
      comment: ""
    });
  }
  get fullName() {
    const { firstName, lastName } = this.shippingInfo.value;
    return `${firstName} ${lastName}`;
  }
  get address() {
    return this.shippingInfo.value.address;
  }
  get comment() {
    return this.shippingInfo.value.comment;
  }
  add(id) {
    this.cartService.addItem(id);
  }
  remove(id) {
    this.cartService.removeItem(id);
  }
};
_CartComponent.\u0275fac = function CartComponent_Factory(t) {
  return new (t || _CartComponent)();
};
_CartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275ProvidersFeature([
  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }
]), \u0275\u0275StandaloneFeature], decls: 40, vars: 9, consts: [["stepper", ""], [1, "row"], [1, "col", "mx-auto"], ["mat-card-title", "", 1, "text-center", "pt-4"], [3, "linear"], ["label", "Review your cart", 3, "completed"], [1, "text-right"], ["label", "Shipping address", 3, "stepControl"], [3, "nextStep", "shippingInfo"], ["mat-button", "", "matStepperPrevious", "", 1, "text-uppercase"], ["color", "primary", "mat-flat-button", "", "matStepperNext", "", 1, "text-uppercase"], ["label", "Review your order"], [1, "col", "col-md-6"], ["color", "primary", "mat-flat-button", "", 1, "text-uppercase"], [3, "add", "remove", "products", "totalPrice", "showControls"], [1, "py-5"], [1, "mx-auto", 3, "diameter"], [1, "lead"], [3, "products", "totalPrice", "showControls"]], template: function CartComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-card")(3, "h1", 3);
    \u0275\u0275text(4, "Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "mat-vertical-stepper", 4, 0)(8, "mat-step", 5);
    \u0275\u0275template(9, CartComponent_Conditional_9_Template, 5, 1, "div", 6)(10, CartComponent_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-step", 7)(12, "h2");
    \u0275\u0275text(13, "Shipping address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-cart-shipping-form", 8);
    \u0275\u0275listener("nextStep", function CartComponent_Template_app_cart_shipping_form_nextStep_14_listener() {
      \u0275\u0275restoreView(_r1);
      const stepper_r4 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(stepper_r4.next());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6)(16, "button", 9);
    \u0275\u0275text(17, " back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 10);
    \u0275\u0275text(19, " next ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "mat-step", 11);
    \u0275\u0275template(21, CartComponent_Conditional_21_Template, 1, 3, "app-order-summary");
    \u0275\u0275elementStart(22, "div", 1)(23, "div", 12)(24, "h2");
    \u0275\u0275text(25, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 12)(31, "h2");
    \u0275\u0275text(32, "Comment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 6)(36, "button", 9);
    \u0275\u0275text(37, " back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 13);
    \u0275\u0275text(39, " place order ");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("linear", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("completed", ctx.cartNotEmpty());
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx.cartNotEmpty() ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("stepControl", ctx.shippingInfo);
    \u0275\u0275advance(3);
    \u0275\u0275property("shippingInfo", ctx.shippingInfo);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(21, ctx.products() ? 21 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.comment);
  }
}, dependencies: [
  MatCard,
  MatCardTitle,
  MatCardContent,
  MatStepper,
  MatStep,
  OrderSummaryComponent,
  MatProgressSpinner,
  MatButton,
  MatStepperNext,
  CartShippingFormComponent,
  MatStepperPrevious
], styles: ["\n\n/*# sourceMappingURL=cart.component.css.map */"], changeDetection: 0 });
var CartComponent = _CartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\cart\\cart.component.ts", lineNumber: 52 });
})();

// src/app/cart/cart-routes.ts
var cart_routes_default = [
  {
    path: "",
    component: CartComponent
  }
];
export {
  cart_routes_default as default
};
//# sourceMappingURL=cart-routes-NPNGGVU3.js.map
