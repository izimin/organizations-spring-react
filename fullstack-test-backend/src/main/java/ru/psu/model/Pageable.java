package ru.psu.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Pageable {
    private Integer pageSize;
    private Integer pageNumber;
    private String filter;

    public Integer getLimit() {
        return pageSize > 0 ? pageSize : Integer.MAX_VALUE;
    }

    public Integer getOffset() {
        return this.pageNumber * getLimit();
    }

    public String getFilterLike() {
        return "%" + filter + "%";
    }
}
