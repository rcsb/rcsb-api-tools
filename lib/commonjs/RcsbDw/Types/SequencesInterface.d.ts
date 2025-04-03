/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * JSON schema to store protein and nucleic acid sequences for the 1D coordinate service
 */
export interface Sequence {
    /**
     * Sequence identifier
     */
    sequence_id?: string;
    /**
     * Full one-letter amino or nucleic acid sequence
     */
    sequence?: string;
}
