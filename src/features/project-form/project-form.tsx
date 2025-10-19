//EXAMPLE OF FORM with form field component

import { useFormik } from "formik";
import { FormField } from "@/shared/ui/form-field";
import { Switch } from "@/shared/ui/switch";
import { Checkbox } from "@/shared/ui/checkbox";
import { getInitialValues } from "./helpers/get-form-initial-values";
import { validationSchema } from "./validation/form-validation.schema";
import { ProjectFormValues } from "./interfaces/form-values.interface";
import { EXPERIENCE_OPTIONS } from "@/entities/projects/constants/experience-options.enum";
import { DollarIcon } from "@/shared/assets/icons";
import { Project } from "@/entities/projects/interfaces/project.interface";

interface ProjectFormProps {
  onSubmit: (values: ProjectFormValues) => void;
  submittedValues?: Partial<ProjectFormValues>;
  project?: Project;
}

export const ProjectForm = ({ onSubmit, project }: ProjectFormProps) => {
  const formik = useFormik<ProjectFormValues>({
    initialValues: getInitialValues(project),
    validationSchema,
    onSubmit: (values) => {
      const processedValues = {
        ...values,
        seekingCollaboratorsDeadline: values.noDeadline
          ? null
          : values.seekingCollaboratorsDeadline,
        seekingCollaboratorsAmount: values.noSpecificNumber
          ? null
          : values.seekingCollaboratorsAmount,
      };
      onSubmit(processedValues);
    },
  });

  const handleExactRateChange = (checked: boolean) => {
    formik.setFieldValue("exactRate", checked);
    if (checked) {
      formik.setFieldValue("rateFrom", "");
      formik.setFieldValue("rateTo", null);
    }
  };

  const handleRateFromChange = (value: string | number) => {
    const processedValue = value === "" ? null : value;
    formik.setFieldValue("rateFrom", processedValue, true);

    formik.setFieldTouched("rateFrom", true, false);

    if (!formik.values.exactRate) {
      formik.validateField("rateTo");
    }
  };

  const handleRateToChange = (value: string | number) => {
    const processedValue = value === "" ? null : value;
    formik.setFieldValue("rateTo", processedValue);

    if (formik.values.exactRate && value) {
      formik.setFieldValue("exactRate", false);
    }

    formik.validateField("rateFrom");
    formik.validateField("rateTo");
  };

  const handleNoDeadlineChange = async (checked: boolean) => {
    await formik.setFieldValue("noDeadline", checked);
    if (checked) {
      await formik.setFieldValue("seekingCollaboratorsDeadline", null);
    }
    await formik.validateField("noDeadline");
    await formik.validateField("seekingCollaboratorsDeadline");
  };

  const handleNoSpecificNumberChange = async (checked: boolean) => {
    await formik.setFieldValue("noSpecificNumber", checked);
    if (checked) {
      await formik.setFieldValue("seekingCollaboratorsAmount", null);
    }
    await formik.validateField("noSpecificNumber");
    await formik.validateField("seekingCollaboratorsAmount");
  };

  return (
    <form
      id="project-form"
      onSubmit={formik.handleSubmit}
      className="space-y-6"
    >
      <div className="bg-gray-50 py-5 px-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Project Details</h3>

        <div className="flex flex-row gap-4 justify-between">
          <FormField
            type="input"
            label="Project Title"
            name="title"
            placeholder="Enter project title"
            value={formik.values.title}
            onChange={(value) => formik.setFieldValue("title", value)}
            error={formik.touched.title && formik.errors.title}
          />

          <FormField
            type="select"
            label="Experience"
            name="requiredExperience"
            placeholder="Select experience level"
            value={formik.values.requiredExperience}
            onChange={(value) =>
              formik.setFieldValue("requiredExperience", value)
            }
            error={
              formik.touched.requiredExperience &&
              formik.errors.requiredExperience
            }
            options={[...EXPERIENCE_OPTIONS]}
          />

          <div className="flex flex-col w-full col-span-2">
            <FormField
              type="calendar"
              label="Seeking Collaborators Deadline"
              name="seekingCollaboratorsDeadline"
              value={formik.values.seekingCollaboratorsDeadline}
              onChange={(value) =>
                formik.setFieldValue("seekingCollaboratorsDeadline", value)
              }
              error={
                formik.touched.seekingCollaboratorsDeadline &&
                formik.errors.seekingCollaboratorsDeadline
              }
              disabled={formik.values.noDeadline}
              withErrorSpace={false}
            />
            <div className="flex items-center gap-2 mt-2">
              <Checkbox
                checked={formik.values.noDeadline}
                onCheckedChange={handleNoDeadlineChange}
                id="no-deadline-checkbox"
              />
              <label
                htmlFor="no-deadline-checkbox"
                className="text-sm text-tetriary cursor-pointer user-select-none"
              >
                Don't have a deadline
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <FormField
            type="textarea"
            name="jobDescription"
            placeholder="Describe your project, what type of collaborators you want to find, your requirements, etc."
            value={formik.values.jobDescription}
            onChange={(value) => formik.setFieldValue("jobDescription", value)}
            error={
              formik.touched.jobDescription && formik.errors.jobDescription
            }
          />
        </div>

        <div className="flex flex-row gap-4 justify-between">
          <FormField
            type="input"
            label="Location"
            name="location"
            placeholder="Location"
            value={formik.values.location || ""}
            onChange={(value) => formik.setFieldValue("location", value)}
            error={formik.touched.location && formik.errors.location}
          />

          <FormField
            type="multi-add"
            label="Languages"
            name="languages"
            placeholder="Add languages"
            value={formik.values.languages}
            onChange={(values) => formik.setFieldValue("languages", values)}
            error={formik.touched.languages && formik.errors.languages}
          />
        </div>
        <div className="flex flex-col mb-6">
          <FormField
            type="counter"
            label="Seeking Collaborators Amount"
            name="seekingCollaboratorsAmount"
            value={formik.values.seekingCollaboratorsAmount}
            onChange={(value) =>
              formik.setFieldValue("seekingCollaboratorsAmount", value)
            }
            error={
              formik.touched.seekingCollaboratorsAmount &&
              formik.errors.seekingCollaboratorsAmount
            }
            min={1}
            max={20}
            disabled={formik.values.noSpecificNumber}
            withErrorSpace={false}
          />
          <div className="flex items-center gap-2 mt-2">
            <Checkbox
              checked={formik.values.noSpecificNumber}
              onCheckedChange={handleNoSpecificNumberChange}
              id="no-specific-number-checkbox"
            />
            <label
              htmlFor="no-specific-number-checkbox"
              className="text-sm text-tetriary cursor-pointer user-select-none"
            >
              Don't have a specific number
            </label>
          </div>
        </div>
        <div>
          <FormField
            type="multi-add"
            label="Key Skills"
            name="keySkills"
            placeholder="Add skills"
            value={formik.values.keySkills}
            onChange={(values) => formik.setFieldValue("keySkills", values)}
            error={formik.touched.keySkills && formik.errors.keySkills}
            suggestions={[
              "Business Strategy",
              "Market Research",
              "Financial Modeling",
              "Budgeting",
              "Competitive Analysis",
              "Project Management",
              "Risk Management",
            ]}
            suggestionsLabel="Common skills in your occupation"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="mb-3 font-semibold">Hourly rate</h1>
          <div className="flex flex-row gap-4 justify-between items-center">
            <div className="relative w-full">
              <FormField
                type="number"
                label={formik.values.exactRate ? "Enter amount" : "From"}
                name="rateFrom"
                placeholder="Type Amount"
                value={formik.values.rateFrom || ""}
                onChange={handleRateFromChange}
                error={formik.touched.rateFrom && formik.errors.rateFrom}
                min={0}
              />
              <DollarIcon className="text-text-accent absolute right-4 top-1/2 transform -translate-y-1/2" />
            </div>
            {!formik.values.exactRate && (
              <div className="relative w-full">
                <FormField
                  type="number"
                  label="To"
                  name="rateTo"
                  placeholder="Type Amount"
                  value={formik.values.rateTo || ""}
                  onChange={handleRateToChange}
                  error={formik.touched.rateTo && formik.errors.rateTo}
                  min={0}
                />

                <DollarIcon className="text-text-accent absolute right-4 top-1/2 transform -translate-y-1/2" />
              </div>
            )}
            <div className="flex items-center gap-2 w-full">
              <Switch
                checked={formik.values.exactRate}
                onCheckedChange={handleExactRateChange}
              />
              <label className="text-sm text-tetriary">Exact Hourly Rate</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
