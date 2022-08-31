/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * JSON schema for core NCBI collection in RCSB Data Warehouse.
 */
export interface CoreNCBI {
  /**
   * RCSB NCBI entry identifiers.
   */
  rcsb_ncbi_containers_identifiers: {
    /**
     * NCBI gene ID.
     */
    gene_id?: string;
    /**
     * NCBI transcript accession.
     */
    rna_nucleotide_accession?: string;
    /**
     * NCBI transcript title.
     */
    rna_nucleotide_title?: string;
    /**
     * NCBI transcript accession version.
     */
    rna_nucleotide_version?: number;
    /**
     * NCBI transcript GI number.
     */
    rna_nucleotide_gi?: string;
    /**
     * NCBI protein accession.
     */
    protein_accession: string;
    /**
     * NCBI protein title.
     */
    protein_title: string;
    /**
     * NCBI protein accession title.
     */
    protein_version: number;
    /**
     * NCBI protein GI number.
     */
    protein_gi: string;
    /**
     * NCBI gene symbol.
     */
    symbol?: string;
    /**
     * NCBI gene name.
     */
    gene_name?: string;
    /**
     * NCBI taxonomy ID (String).
     */
    tax_id: string;
    /**
     * UniProt accession list.
     */
    uniprot_accession: {
      /**
       * UniProt accesion.
       */
      accession_id: string;
      /**
       * UniProt isoform ID.
       */
      isoform_id: number;
    }[];
  };
  /**
   * NCBI metadata.
   */
  rcsb_ncbi_metadata: {
    /**
     * NCBI entry status.
     */
    status: string;
  };
  /**
   * NCBI entry chromosome information.
   */
  rcsb_ncbi_chromosome?: {
    /**
     * NCBI chromosome accession.
     */
    genomic_nucleotide_accession?: string;
    /**
     * NCBI chromosome accession version.
     */
    genomic_nucleotide_version?: number;
    /**
     * NCBI chromosome GI number.
     */
    genomic_nucleotide_gi?: string;
    /**
     * Genome assembly name.
     */
    assembly?: string;
    /**
     * NCBI chromosome name.
     */
    genomic_nucleotide_name?: string;
    /**
     * NCBI chromosome title.
     */
    genomic_nucleotide_title?: string;
  };
  /**
   * NCBI coordinates.
   */
  rcsb_ncbi_coordinates?: {
    /**
     * NCBI gene start position.
     */
    start_position_on_the_genomic_accession?: number;
    /**
     * NCBI gene end position.
     */
    end_position_on_the_genomic_accession?: number;
    /**
     * NCBI gene DNA strand.
     */
    orientation?: number;
    /**
     * NCBI transcript coordinates list.
     */
    rna_coordinates?: {
      /**
       * NCBI exon start position on the gene.
       */
      start_position_on_the_gene_sequence: number;
      /**
       * NCBI exon end position on the gene.
       */
      end_position_on_the_gene_sequence: number;
    }[];
    /**
     * NCBI protein coordinates list.
     */
    protein_coordinates?: {
      /**
       * NCBI CDS start position on the gene.
       */
      start_position_on_the_gene_sequence: number;
      /**
       * NCBI CDS end position on the gene.
       */
      end_position_on_the_gene_sequence: number;
    }[];
  };
  /**
   * NCBI organism information.
   */
  rcsb_ncbi_organism: {
    /**
     * NCBI taxonomy ID.
     */
    tax_id: string;
    /**
     * Scientific name source: Data Warehouse (DW) or NCBI Web Services (WS).
     */
    source: "DW" | "WS";
    /**
     * NCBI organism scientific name.
     */
    scientific_name: string;
    /**
     * NCBI organism common name.
     */
    common_name?: string;
  };
  /**
   * NCBI pairwise sequence alignments.
   */
  rcsb_ncbi_alignments?: {
    /**
     * List of alignments with core_entity canonical sequences
     */
    core_entity_alignments?: {
      /**
       * Alignment scores
       */
      scores: {
        target_coverage: number;
        query_coverage: number;
        target_length: number;
        query_length: number;
        [k: string]: unknown;
      };
      /**
       * Aligned sequence regions
       */
      aligned_regions: {
        /**
         * NCBI sequence start position
         */
        target_begin: number;
        /**
         * Entity seqeunce start position
         */
        query_begin: number;
        /**
         * Aligned region length
         */
        length: number;
        [k: string]: unknown;
      }[];
      /**
       * core_entity identifiers
       */
      core_entity_identifiers: {
        entry_id: string;
        entity_id: string;
        [k: string]: unknown;
      };
      rcsb_latest_revision?: {
        /**
         * The major version number of the latest revision.
         */
        major_revision?: number;
        /**
         * The minor version number of the latest revision.
         */
        minor_revision?: number;
        /**
         * The release date of the latest revision item.
         */
        revision_date?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }[];
    /**
     * List of alignments with core_uniprot sequences
     */
    core_uniprot_alignments?: {
      /**
       * Alignment scores
       */
      scores: {
        target_coverage: number;
        query_coverage: number;
        target_length: number;
        query_length: number;
        [k: string]: unknown;
      };
      /**
       * Aligned sequence regions
       */
      aligned_regions: {
        /**
         * NCBI sequence start position
         */
        target_begin: number;
        /**
         * Entity seqeunce start position
         */
        query_begin: number;
        /**
         * Aligned region length
         */
        length: number;
        [k: string]: unknown;
      }[];
      /**
       * UniProt accession
       */
      uniprot_id?: string;
      [k: string]: unknown;
    }[];
  };
  /**
   * NCBI sequences.
   */
  rcsb_ncbi_sequence: {
    /**
     * NCBI protein sequence.
     */
    protein: string;
  };
}
