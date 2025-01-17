import { Component, Signal, signal, viewChild } from '@angular/core';
import { SixDrawer, UiLibraryAngularModule } from '@six-group/ui-library-angular';
import { FormsModule } from '@angular/forms';

const stepCount = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [UiLibraryAngularModule, FormsModule],
})
export class AppComponent {
  drawer: Signal<SixDrawer> = viewChild.required('drawer');
  steps = signal<Step[]>(initialSteps);
  currentStep = signal<Step | null>(null);

  addStep() {
    this.drawer().show();
  }

  editStep(step: Step) {
    this.currentStep.set(step);
    this.drawer().show();
  }

  saveStep(title: string, mandatory: boolean, description: string) {
    const steps = this.steps();
    const currentStep = this.currentStep();
    if (!currentStep) {
      const newStep = { id: this.steps().length + 1, title, description, mandatory };
      this.steps.set([...steps.slice(0, -1), newStep, steps[steps.length - 1]]);
    } else {
      this.steps.set(
        steps.map((step) => (step.id === currentStep.id ? { ...currentStep, title, description, mandatory } : step)),
      );
    }
    this.currentStep.set(null);
    this.drawer().hide();
  }

  deleteStep() {
    this.steps.set(this.steps().filter((step) => step.id !== this.currentStep()?.id));
    this.currentStep.set(null);
    this.drawer().hide();
  }
}

// helper

export interface Step {
  id: number;
  title: string;
  description: string;
  mandatory: boolean;
}

const initialSteps = [
  {
    id: 0,
    title: 'Start',
    mandatory: true,
    description: 'Start Step',
  },
  ...[...Array(stepCount).keys()].map((i) => {
    let id = i + 1;
    return {
      id: id,
      title: `Step ${id}`,
      description: `Step ${id} description`,
      mandatory: i !== 0,
    };
  }),
  {
    id: stepCount + 1,
    title: 'End',
    mandatory: true,
    description: 'End Step',
  },
];
