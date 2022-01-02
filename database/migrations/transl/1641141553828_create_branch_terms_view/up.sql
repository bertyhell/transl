CREATE VIEW branch_terms AS
SELECT DISTINCT ON
    ( branch_terms."key", branch_terms.branch_id ) branch_terms.ID,
                                                   branch_terms.uuid,
                                                   branch_terms."key",
                                                   branch_terms.description,
                                                   branch_terms.branch_id,
                                                   branch_terms.created_at
FROM
    (
        (
            SELECT
                terms."key",
                terms.ID,
                terms.uuid,
                terms.description,
                branch_ancestors.branch_id,
                terms.created_at
            FROM
                branches
                    INNER JOIN branch_ancestors ON branches."id" = branch_ancestors.branch_id
                    INNER JOIN terms ON branch_ancestors.ancestor_branch_id = terms.branch_id
                    INNER JOIN branches AS ancestor_branch ON branch_ancestors.ancestor_child_branch_id = ancestor_branch."id"
            WHERE
                    terms.created_at < ancestor_branch.created_at
            ORDER BY
                terms."key",
                branch_ancestors.ancestor_branch_id DESC
        ) UNION
        (
            SELECT
                terms."key",
                terms.ID,
                terms.uuid,
                   terms.description,
                branch_ancestors.branch_id,
                terms.created_at
            FROM
                branches
                    INNER JOIN branch_ancestors ON branches."id" = branch_ancestors.branch_id
                    INNER JOIN terms ON branch_ancestors.ancestor_branch_id = terms.branch_id
            WHERE
                    branch_ancestors.ancestor_level = 0
            ORDER BY
                terms."key",
                branch_ancestors.ancestor_branch_id DESC
        )
    ) AS branch_terms
ORDER BY
    branch_terms.branch_id;
