import SubmissionPreivew from '../components/SubmissionPreview';

export default function resolveInput(type) {
  if (
    type.name === 'array' &&
    type.options &&
    type.options.formattedSubmission
  ) {
    return SubmissionPreivew;
  }
}
